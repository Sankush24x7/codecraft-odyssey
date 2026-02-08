# 🎮 CodeCraft Odyssey

**An epic RPG-style learning game where developers level up from 1 → 100 by solving real coding challenges!**

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Astro](https://img.shields.io/badge/astro-5.0.3-orange.svg)
![CodeMirror](https://img.shields.io/badge/codemirror-6.0-blue.svg)

---

## 🌟 Features

✅ **15 Complete Levels** in World 1 (Novice Plains)  
✅ **Fix-the-Code & Build-from-Scratch** missions  
✅ **Epic Boss Fight** at Level 15 🐉  
✅ **Progressive Difficulty** from beginner to intermediate  
✅ **XP & Leveling System** with achievements  
✅ **Health/Lives System** - encourages thinking before trying  
✅ **Hint System** - 3 hints per mission  
✅ **Badge Collection** - unlock 8 unique achievements  
✅ **localStorage Persistence** - no database required  
✅ **Pixel Art Retro Theme** for all Novice Plains levels  
✅ **Lightweight & Fast** - Astro + CodeMirror 6

---

## 🗺️ Game Worlds

| World | Levels | Theme | Skills |
|-------|--------|-------|--------|
| 🌱 **Novice Plains** | 1-15 | Pixel Retro | **COMPLETE!** Basics, loops, arrays, strings |
| 🏗️ **API Citadel** | 16-30 | Hybrid | Coming Soon: REST, CRUD, validation |
| 🎨 **Frontend Kingdom** | 31-50 | Modern | Coming Soon: DOM, state, async |
| 🔐 **Security Fortress** | 51-65 | Cyberpunk | Coming Soon: XSS, auth, OWASP |
| ⚙️ **Performance Arena** | 66-85 | Neon | Coming Soon: Optimization, caching |
| 🧠 **Architect Summit** | 86-100 | Minimalist | Coming Soon: System design, patterns |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Installation

```bash
# 1. Clone or download the project
cd codecraft-odyssey

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# Visit: http://localhost:4321
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
codecraft-odyssey/
├── public/
│   ├── missions/           # Mission JSON files
│   │   ├── level-001.json
│   │   ├── level-002.json
│   │   └── ...
│   ├── sprites/            # Pixel art assets (future)
│   └── sounds/             # Sound effects (future)
├── src/
│   ├── components/         # Reusable Astro components
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── map.astro       # World map
│   │   └── mission/
│   │       └── [id].astro  # Dynamic mission page
│   ├── scripts/
│   │   ├── gameState.js    # localStorage manager
│   │   └── validator.js    # Test runner
│   └── styles/
│       └── pixel-theme.css # Pixel retro theme
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🎮 How to Play

### Starting the Game

1. **Enter your name** on the home screen
2. Click **START QUEST** to begin
3. **World Map** shows all available levels

### Playing a Mission

1. **Read the story** and instructions
2. **Fix or write code** in the editor
3. Click **RUN TESTS** to validate
4. **Pass all tests** to complete the mission
5. Earn **XP** and **badges**!

### Game Mechanics

- **Health (❤️)**: Start with 3 lives per mission
- **Wrong answer**: -1 ❤️
- **0 ❤️**: Mission restarts (no XP penalty)
- **Hints**: Use up to 3 hints (reduces bonus XP)
- **Speed Bonus**: Complete in <2 minutes for +25% XP
- **Perfect Run**: No hints + first try = +50% XP

---

## 💾 Data Storage

All game progress is stored in **localStorage**:

```javascript
{
  playerId: "player_xxx",
  playerName: "Adventurer",
  currentLevel: 5,
  totalXP: 450,
  completedLevels: [1, 2, 3, 4],
  badges: ["first-steps", "loop-novice"],
  health: 3,
  stats: {
    totalMissionsCompleted: 4,
    totalHintsUsed: 2,
    fastestCompletion: 45,
    perfectRuns: 1
  }
}
```

**Reset Progress**: Clear localStorage in browser dev tools or add a reset button.

---

## 🧩 Adding New Missions

### 1. Create Mission JSON

Create `/public/missions/level-006.json`:

```json
{
  "id": 6,
  "world": "novice-plains",
  "worldId": 1,
  "title": "Your Mission Title",
  "difficulty": "medium",
  "type": "fix-the-code",
  "theme": "pixel-retro",
  "xpReward": 120,
  "story": "Epic story about the mission...",
  "instructions": "What the player needs to do...",
  "starterCode": "function buggyCode() {\n  // Bug here\n}",
  "solution": "function fixedCode() {\n  // Fixed!\n}",
  "testCases": [
    {
      "input": [5, 3],
      "expected": 8,
      "description": "Test description"
    }
  ],
  "hints": [
    "Hint 1: Vague pointer",
    "Hint 2: More specific",
    "Hint 3: Almost gives it away"
  ],
  "badge": "badge-id-or-null",
  "nextLevel": 7
}
```

### 2. Add to Static Paths

Update `/src/pages/mission/[id].astro`:

```javascript
export function getStaticPaths() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // ... existing levels
    { params: { id: '6' } },  // ← Add new level
  ];
}
```

### 3. Update Map Page

In `/src/pages/map.astro`, change the loop limit:

```javascript
for (let i = 1; i <= 6; i++) {  // ← Update from 5 to 6
  // Level button generation
}
```

---

## 🎨 Customization

### Change Theme Colors

Edit `/src/styles/pixel-theme.css`:

```css
:root {
  --pixel-primary: #4ade80;    /* Green */
  --pixel-secondary: #60a5fa;  /* Blue */
  --pixel-accent: #fbbf24;     /* Yellow */
  --pixel-danger: #f87171;     /* Red */
}
```

### Add New World Themes

1. Create new CSS file: `/src/styles/modern-theme.css`
2. Import in relevant pages
3. Update mission JSON `"theme"` property

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro 5** | Static site framework |
| **CodeMirror 6** | Lightweight code editor (~200KB) |
| **Vanilla JS** | Game logic & state management |
| **localStorage** | Client-side persistence |
| **CSS Variables** | Dynamic theming |

**Why this stack?**
- ✅ No database needed
- ✅ Fast loading (<1s)
- ✅ Works offline (PWA-ready)
- ✅ Easy deployment (Netlify/Vercel/Cloudflare)
- ✅ Minimal dependencies

---

## 📈 Roadmap

### ✅ v1.0 (COMPLETE!)
- [x] Levels 1-15 (Complete Novice Plains)
- [x] Fix-the-code missions
- [x] Build-from-scratch missions
- [x] Boss fight (Level 15) 🐉
- [x] XP & leveling system
- [x] Health/lives mechanic
- [x] Hint system
- [x] Badge system (8 badges)
- [x] localStorage persistence
- [x] Pixel retro theme

### v1.1 (Next)
- [ ] Player profile/stats page
- [ ] Badge showcase page
- [ ] Sound effects toggle
- [ ] Achievements page
- [ ] Export/Import save data

### v1.2
- [ ] World 2: API Citadel (Levels 16-30)
- [ ] Hybrid visual theme
- [ ] Leaderboard (optional Firebase integration)
- [ ] Daily challenges

### v2.0 (Future)
- [ ] All 100 levels complete
- [ ] 6 unique world themes
- [ ] Boss fights every 15 levels
- [ ] Achievement system expansion
- [ ] Multiplayer leaderboards

---

## 🤝 Contributing

Want to add missions or features?

1. Fork the repo
2. Create a new branch: `git checkout -b feature/new-missions`
3. Add your missions to `/public/missions/`
4. Test locally: `npm run dev`
5. Submit a pull request!

**Mission Guidelines:**
- Clear, concise instructions
- 3-5 test cases (cover edge cases)
- 3 progressive hints
- Difficulty appropriate for level range
- Fun story/context!

---

## 📄 License

MIT License - Feel free to use this for learning or commercial projects!

---

## 🎯 Philosophy

**CodeCraft Odyssey** is built on the belief that:

1. **Learning by doing** beats watching tutorials
2. **Games make learning fun** - dopamine-driven progress
3. **Real code > MCQs** - no multiple choice BS
4. **Progressive difficulty** - from "hello world" to system design
5. **Instant feedback** - run code, see results immediately

---

## 🙏 Credits

- **Game Design**: Inspired by Codecademy, LeetCode, and classic RPGs
- **Code Editor**: [CodeMirror 6](https://codemirror.net/)
- **Framework**: [Astro](https://astro.build/)
- **Fonts**: Press Start 2P & VT323 (Google Fonts)

---

## 📞 Support

- **Issues**: Open a GitHub issue
- **Questions**: Start a discussion
- **Feature Requests**: Submit an issue with `[Feature]` tag

---

**Ready to start your coding odyssey? Let's go! 🚀**

```bash
npm install && npm run dev
```

**Visit: http://localhost:4321**

---

Made with ❤️ for developers who love to learn by doing!
