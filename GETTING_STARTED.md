# 🎮 Getting Started with CodeCraft Odyssey

Welcome, brave developer! This guide will get you up and running in **5 minutes**.

---

## ✅ Prerequisites

Before you begin, make sure you have:

1. **Node.js 18+** installed
   - Download: https://nodejs.org/
   - Check version: `node -v`
   - Should show: v18.x.x or higher

2. **A code editor** (optional but recommended)
   - VS Code: https://code.visualstudio.com/
   - Or any text editor you prefer

3. **A terminal/command prompt**
   - Mac: Terminal (built-in)
   - Windows: Command Prompt or PowerShell
   - Linux: Your favorite terminal

---

## 🚀 Installation (2 minutes)

### Step 1: Extract the Project

If you received a ZIP file:
```bash
# Extract the ZIP
# Navigate to the extracted folder
cd codecraft-odyssey
```

If you cloned from Git:
```bash
git clone your-repo-url
cd codecraft-odyssey
```

### Step 2: Install Dependencies

**Option A: Quick Start Scripts**

**Windows:**
```bash
start.bat
```

**Mac/Linux:**
```bash
./start.sh
```

**Option B: Manual Installation**
```bash
npm install
```

This will download all required packages (~50MB, takes 1-2 minutes).

### Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
🚀 astro v5.0.3 started in XXms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

### Step 4: Open in Browser

Visit: **http://localhost:4321**

🎉 **You're ready to play!**

---

## 🎮 Your First Mission

### 1. Enter Your Name
- Type your developer name (or keep "Adventurer")
- Click **START QUEST**

### 2. World Map
- You'll see the **Novice Plains** world
- Level 1 is unlocked and ready!
- Click **▶ LEVEL 1**

### 3. Play Mission
- **Read the story**: A wizard's addition spell is broken!
- **Fix the code**: Change `-` to `+`
- **Click RUN TESTS**: See if it works!
- **Pass all tests**: Earn 50 XP!

### 4. Progress
- You'll unlock Level 2
- Return to world map to continue

---

## 📚 Understanding the Interface

### Home Screen
```
┌─────────────────────────────┐
│  ⚔️ CODECRAFT ODYSSEY ⚔️   │
│  Enter Your Name: _______   │
│  [▶ START QUEST]            │
└─────────────────────────────┘
```

### World Map
```
┌────────────────────────────────────┐
│ Player Info | XP Bar | Stats      │
├────────────────────────────────────┤
│ 🌱 WORLD 1: NOVICE PLAINS          │
│                                    │
│ [✓ 1] [▶ 2] [🔒 3] [🔒 4] [🔒 5] │
└────────────────────────────────────┘
```
- ✓ = Completed
- ▶ = Current/Unlocked
- 🔒 = Locked

### Mission Screen
```
┌─────────────────┬──────────────────┐
│ INSTRUCTIONS    │ CODE EDITOR      │
│                 │                  │
│ Story           │ function code()  │
│ Mission         │ {                │
│ Hints           │   // Fix me!     │
│ Test Results    │ }                │
│                 │                  │
│ [💡 HINT]       │ [▶ RUN TESTS]    │
└─────────────────┴──────────────────┘
```

---

## 🎯 Tips for Success

### ⚡ Speed Matters
- Complete missions in **<2 minutes** for +25% XP
- Don't rush! Understanding > speed

### 💡 Use Hints Wisely
- You get **3 hints** per mission
- Using hints reduces bonus XP
- Try solving on your own first!

### ❤️ Watch Your Health
- You have **3 lives** per mission
- Wrong answer = -1 ❤️
- 0 lives = mission restarts (no penalty)
- Think before running tests!

### 🧪 Read Test Cases
- Tests show what your code should do
- Use them as examples
- Fix edge cases!

---

## 🏆 Progression System

### XP & Leveling
```
Level 1: 0 XP
Level 2: 200 XP
Level 3: 500 XP
Level 4: 900 XP
...
```

Each level requires more XP than the last.

### Badges
Unlock badges for achievements:
- 🥉 **First Steps** - Complete Level 1
- 🔄 **Loop Novice** - Master loops (Level 4)
- 🧮 **Array Master** - Conquer arrays (Level 5)

### Worlds
- Complete 15 levels to unlock next world
- Each world has unique theme & challenges

---

## 🛠️ Common Issues

### Server won't start
```bash
# Kill existing process
killall node  # Mac/Linux
taskkill /F /IM node.exe  # Windows

# Try again
npm run dev
```

### Port 4321 already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Changes not showing
```bash
# Hard refresh browser
Ctrl + Shift + R  # Windows/Linux
Cmd + Shift + R   # Mac
```

### Code editor not loading
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm run dev
```

---

## 📱 Playing on Mobile

CodeCraft Odyssey works on mobile browsers!

1. Start dev server on your computer
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Visit: `http://YOUR-IP:4321` on phone
4. Play on the go! 📱

**Note:** Code editor works best on tablet or desktop.

---

## 💾 Save System

Your progress is **automatically saved** to browser localStorage:

- ✅ Level progress
- ✅ XP earned
- ✅ Badges unlocked
- ✅ Missions completed

**Important:**
- Clearing browser data = losing progress
- Different browsers = separate saves
- Export/import coming in v1.1!

---

## 🎨 Customization

### Change Your Name
```javascript
// Open browser console (F12)
// Run this:
localStorage.clear();
// Refresh page, enter new name
```

### Reset Progress
```javascript
// Open browser console (F12)
localStorage.clear();
location.reload();
```

---

## 📖 Learning Resources

New to coding? Start here:

1. **JavaScript Basics**
   - Variables: `let`, `const`
   - Functions: `function name() {}`
   - Loops: `for`, `while`
   - Arrays: `[1, 2, 3]`

2. **Debugging Tips**
   - Read error messages carefully
   - Use `console.log()` to debug
   - Check test cases for examples

3. **Resources**
   - MDN Web Docs: https://developer.mozilla.org/
   - JavaScript.info: https://javascript.info/
   - FreeCodeCamp: https://freecodecamp.org/

---

## 🎯 Mission Strategy

### Step 1: Read Everything
- Story (for context)
- Instructions (what to do)
- Test cases (expected behavior)

### Step 2: Understand the Bug
- Run the code mentally
- Identify the issue
- Think of the fix

### Step 3: Fix & Test
- Make the change
- Run tests
- Debug if needed

### Step 4: Optimize (Optional)
- Can you do it cleaner?
- Can you do it faster?
- Can you do it differently?

---

## 🚀 Next Steps

After completing the tutorial (Levels 1-5):

1. **Keep Going!** - More levels coming soon
2. **Share Progress** - Screenshot your badges!
3. **Give Feedback** - What do you want to see next?
4. **Contribute** - Add your own missions!

---

## 🤝 Community

Want to connect with other players?

- **GitHub Issues**: Report bugs or request features
- **Discussions**: Share tips and tricks
- **Discord** (coming soon): Chat with other learners

---

## ❓ FAQ

**Q: How long does it take to complete?**  
A: MVP has 5 levels (~30-60 minutes). Full game will have 100!

**Q: Do I need internet?**  
A: After first load, works offline!

**Q: Can I skip levels?**  
A: No! You must complete each level to unlock the next.

**Q: Will my progress sync across devices?**  
A: Not yet. Coming in v1.2 with optional cloud save.

**Q: Can I add my own missions?**  
A: Yes! See README.md "Adding New Missions" section.

**Q: Is this free?**  
A: Completely free and open source!

---

## 📞 Need Help?

**Stuck on a mission?**
1. Use the hint system (💡 button)
2. Read test cases carefully
3. Check browser console for errors
4. Take a break and come back fresh!

**Technical issues?**
1. Check this guide
2. Read TROUBLESHOOTING section in README
3. Open a GitHub issue
4. Ask in discussions

---

## 🎉 Ready to Begin?

**Three ways to start:**

1. **Quick (Scripts):**
   ```bash
   ./start.sh       # Mac/Linux
   start.bat        # Windows
   ```

2. **Manual:**
   ```bash
   npm install
   npm run dev
   ```

3. **Pro:**
   ```bash
   npm install && npm run dev -- --host
   # Access from any device on network!
   ```

---

**Welcome to CodeCraft Odyssey!** ⚔️

May your code be bug-free and your XP plentiful! 🚀

**Visit: http://localhost:4321**
