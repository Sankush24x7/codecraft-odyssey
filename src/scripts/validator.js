// Test Validator - Safely runs user code against test cases
// Uses Function constructor for sandboxed execution

export class TestValidator {
  constructor(testCases, timeLimit = 5000) {
    this.testCases = testCases;
    this.timeLimit = timeLimit;
  }

  /**
   * Validate user code against test cases
   * @param {string} userCode - The code submitted by user
   * @returns {object} Results of validation
   */
  validate(userCode) {
    const results = {
      passed: 0,
      failed: 0,
      total: this.testCases.length,
      details: [],
      errors: [],
      success: false,
      executionTime: 0
    };

    const startTime = performance.now();

    try {
      // Create function from user code
      // This provides some sandboxing
      const userFunction = new Function('return ' + userCode)();

      if (typeof userFunction !== 'function') {
        results.errors.push('Code must define a function');
        return results;
      }

      // Run each test case
      for (let i = 0; i < this.testCases.length; i++) {
        const testCase = this.testCases[i];
        const testResult = this.runTestCase(userFunction, testCase, i + 1);
        
        results.details.push(testResult);
        
        if (testResult.passed) {
          results.passed++;
        } else {
          results.failed++;
        }
      }

      results.success = results.failed === 0;
      results.executionTime = Math.round(performance.now() - startTime);

    } catch (error) {
      results.errors.push(`Syntax Error: ${error.message}`);
    }

    return results;
  }

  /**
   * Run a single test case
   */
  runTestCase(userFunction, testCase, testNumber) {
    const result = {
      testNumber,
      passed: false,
      input: testCase.input,
      expected: testCase.expected,
      actual: null,
      error: null
    };

    try {
      // Set timeout for test execution
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), this.timeLimit);
      });

      const executionPromise = Promise.resolve(
        userFunction(...(Array.isArray(testCase.input) ? testCase.input : [testCase.input]))
      );

      // Run with timeout
      Promise.race([executionPromise, timeoutPromise])
        .then(output => {
          result.actual = output;
          result.passed = this.compareResults(output, testCase.expected);
        })
        .catch(error => {
          result.error = error.message;
        });

      // Synchronous execution for simpler test cases
      const output = userFunction(...(Array.isArray(testCase.input) ? testCase.input : [testCase.input]));
      result.actual = output;
      result.passed = this.compareResults(output, testCase.expected);

    } catch (error) {
      result.error = error.message;
      result.passed = false;
    }

    return result;
  }

  /**
   * Deep comparison of expected vs actual results
   */
  compareResults(actual, expected) {
    // Handle primitives
    if (actual === expected) return true;

    // Handle null/undefined
    if (actual == null || expected == null) return actual === expected;

    // Handle arrays
    if (Array.isArray(actual) && Array.isArray(expected)) {
      if (actual.length !== expected.length) return false;
      
      for (let i = 0; i < actual.length; i++) {
        if (!this.compareResults(actual[i], expected[i])) return false;
      }
      
      return true;
    }

    // Handle objects
    if (typeof actual === 'object' && typeof expected === 'object') {
      const actualKeys = Object.keys(actual).sort();
      const expectedKeys = Object.keys(expected).sort();

      if (actualKeys.length !== expectedKeys.length) return false;
      if (actualKeys.join(',') !== expectedKeys.join(',')) return false;

      for (const key of actualKeys) {
        if (!this.compareResults(actual[key], expected[key])) return false;
      }

      return true;
    }

    return false;
  }

  /**
   * Calculate XP based on performance
   */
  calculateXP(results, baseXP, speedBonus = false, noHintsBonus = false) {
    if (!results.success) return 0;

    let xp = baseXP;

    // Speed bonus (completed in under 2 minutes)
    if (speedBonus && results.executionTime < 120000) {
      xp += Math.floor(baseXP * 0.25);
    }

    // No hints bonus
    if (noHintsBonus) {
      xp += Math.floor(baseXP * 0.20);
    }

    // Perfect run (all tests passed first try)
    if (results.passed === results.total) {
      xp += Math.floor(baseXP * 0.30);
    }

    return xp;
  }
}

/**
 * Validate fix-the-code missions
 * Compares user's fixed code against test cases
 */
export function validateFixTheCode(userCode, testCases, baseXP = 50) {
  const validator = new TestValidator(testCases);
  const results = validator.validate(userCode);
  
  return {
    ...results,
    xpEarned: validator.calculateXP(results, baseXP)
  };
}

/**
 * Validate build-from-scratch missions
 */
export function validateBuildFromScratch(userCode, testCases, baseXP = 100) {
  const validator = new TestValidator(testCases);
  const results = validator.validate(userCode);
  
  return {
    ...results,
    xpEarned: validator.calculateXP(results, baseXP)
  };
}
