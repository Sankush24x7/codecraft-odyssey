// Game State Manager - localStorage persistence
// All game progress is stored client-side

const STORAGE_KEY = 'codecraft_odyssey_save';

export const DEFAULT_STATE = {
  playerId: null,
  playerName: 'Adventurer',
  currentLevel: 1,
  totalXP: 0,
  currentWorld: 1,
  health: 3,
  maxHealth: 3,
  completedLevels: [],
  badges: [],
  unlockedWorlds: [1],
  streak: 0,
  lastPlayed: null,
  settings: {
    soundEnabled: true,
    theme: 'auto'
  },
  stats: {
    totalMissionsCompleted: 0,
    totalHintsUsed: 0,
    fastestCompletion: null,
    perfectRuns: 0 // No hints, first try
  }
};

export class GameState {
  constructor() {
    this.state = this.load();
  }

  load() {
    if (typeof localStorage === 'undefined') return { ...DEFAULT_STATE };
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const newState = { 
        ...DEFAULT_STATE, 
        playerId: this.generateId(),
        lastPlayed: new Date().toISOString()
      };
      this.save(newState);
      return newState;
    }
    
    return JSON.parse(saved);
  }

  save(state = this.state) {
    if (typeof localStorage === 'undefined') return;
    
    state.lastPlayed = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    this.state = state;
  }

  generateId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get current state
  get() {
    return this.state;
  }

  // Update player name
  setPlayerName(name) {
    this.state.playerName = name;
    this.save();
  }

  // Complete a level
  completeLevel(levelId, xpEarned, timeSeconds, hintsUsed = 0) {
    if (!this.state.completedLevels.includes(levelId)) {
      this.state.completedLevels.push(levelId);
      this.state.stats.totalMissionsCompleted++;
    }

    this.state.totalXP += xpEarned;
    this.state.stats.totalHintsUsed += hintsUsed;

    // Track fastest completion
    if (!this.state.stats.fastestCompletion || timeSeconds < this.state.stats.fastestCompletion) {
      this.state.stats.fastestCompletion = timeSeconds;
    }

    // Perfect run (no hints, first try)
    if (hintsUsed === 0 && this.state.health === this.state.maxHealth) {
      this.state.stats.perfectRuns++;
    }

    // Level up logic
    const newLevel = this.calculateLevel(this.state.totalXP);
    if (newLevel > this.state.currentLevel) {
      this.state.currentLevel = newLevel;
      this.unlockWorld(Math.ceil(newLevel / 15)); // Unlock new world every 15 levels
    }

    // Reset health for next mission
    this.state.health = this.state.maxHealth;

    this.save();
    return {
      levelUp: newLevel > this.state.currentLevel,
      newLevel: newLevel,
      totalXP: this.state.totalXP
    };
  }

  // XP to Level calculation
  calculateLevel(xp) {
    // Progressive XP requirements: Level 1 = 0, Level 2 = 100, Level 3 = 250, etc.
    let level = 1;
    let requiredXP = 0;
    
    while (xp >= requiredXP) {
      level++;
      requiredXP += level * 100; // Each level requires more XP
    }
    
    return level - 1;
  }

  // Get XP progress for current level
  getLevelProgress() {
    const currentLevel = this.state.currentLevel;
    const currentXP = this.state.totalXP;
    
    // Calculate XP needed for current level
    let xpForCurrentLevel = 0;
    for (let i = 1; i < currentLevel; i++) {
      xpForCurrentLevel += (i + 1) * 100;
    }
    
    // XP needed for next level
    const xpForNextLevel = xpForCurrentLevel + (currentLevel + 1) * 100;
    const xpInCurrentLevel = currentXP - xpForCurrentLevel;
    const xpNeededForNext = xpForNextLevel - xpForCurrentLevel;
    
    return {
      current: xpInCurrentLevel,
      required: xpNeededForNext,
      percentage: Math.floor((xpInCurrentLevel / xpNeededForNext) * 100)
    };
  }

  // Damage (wrong answer)
  takeDamage() {
    this.state.health = Math.max(0, this.state.health - 1);
    this.save();
    return this.state.health;
  }

  // Reset health
  resetHealth() {
    this.state.health = this.state.maxHealth;
    this.save();
  }

  // Unlock badge
  unlockBadge(badgeId) {
    if (!this.state.badges.includes(badgeId)) {
      this.state.badges.push(badgeId);
      this.save();
      return true;
    }
    return false;
  }

  // Unlock world
  unlockWorld(worldId) {
    if (!this.state.unlockedWorlds.includes(worldId)) {
      this.state.unlockedWorlds.push(worldId);
      this.save();
      return true;
    }
    return false;
  }

  // Check if level is unlocked
  isLevelUnlocked(levelId) {
    // Level 1 always unlocked
    if (levelId === 1) return true;
    
    // Previous level must be completed
    return this.state.completedLevels.includes(levelId - 1);
  }

  // Reset all progress
  reset() {
    this.state = { 
      ...DEFAULT_STATE, 
      playerId: this.generateId(),
      lastPlayed: new Date().toISOString()
    };
    this.save();
  }

  // Export save data
  export() {
    return JSON.stringify(this.state, null, 2);
  }

  // Import save data
  import(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      this.state = imported;
      this.save();
      return true;
    } catch (e) {
      console.error('Failed to import save:', e);
      return false;
    }
  }
}

// Singleton instance
let gameStateInstance = null;

export function getGameState() {
  if (typeof window === 'undefined') return new GameState();
  
  if (!gameStateInstance) {
    gameStateInstance = new GameState();
  }
  return gameStateInstance;
}
