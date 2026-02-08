# 📚 CodeCraft Odyssey - Documentation

Welcome to **CodeCraft Odyssey**! This folder contains all documentation you need to get started, develop, and deploy your game.

---

## 📖 Documentation Files

### 1. [README.md](README.md) - **START HERE**
- Overview of the project
- Quick start guide
- How to play
- Project structure
- Tech stack details

### 2. [DEPLOYMENT.md](DEPLOYMENT.md)
- Deployment to Cloudflare Pages, Netlify, Vercel
- Custom domain setup
- Performance optimization
- PWA configuration
- Analytics integration

### 3. Quick Start Scripts
- **Linux/Mac**: `./start.sh`
- **Windows**: `start.bat`

---

## 🚀 Quick Start (TL;DR)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:4321
```

---

## 📁 File Reference

### Core Files
- `package.json` - Dependencies and scripts
- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript config

### Source Code (`src/`)
- `layouts/BaseLayout.astro` - Base page template
- `pages/index.astro` - Home page
- `pages/map.astro` - World map
- `pages/mission/[id].astro` - Mission page
- `scripts/gameState.js` - Game state management
- `scripts/validator.js` - Test runner
- `styles/pixel-theme.css` - Pixel retro theme

### Game Data (`public/`)
- `missions/level-001.json` to `level-005.json` - Mission definitions

---

## 🎮 Game Mechanics Reference

### XP System
- **Level 1**: 0 XP required
- **Level 2**: 200 XP required
- **Level 3**: 500 XP required
- Each subsequent level requires: `(level + 1) * 100` XP

### Mission Types
1. **Fix-the-Code**: Debug broken code
2. **Build-from-Scratch**: Write code from scratch
3. **Hybrid**: Fix + extend

### Bonus XP
- **Speed Bonus**: +25% (complete in <2 minutes)
- **No Hints Bonus**: +20%
- **Perfect Run**: +30% (all tests pass first try)

### Health System
- Start with 3 ❤️ per mission
- Wrong answer: -1 ❤️
- 0 ❤️: Mission restarts

---

## 🧩 Adding Content

### New Missions
1. Create JSON file in `public/missions/`
2. Add to static paths in `mission/[id].astro`
3. Update map page to show new level

### New Worlds
1. Create new theme CSS file
2. Update mission JSON `"theme"` property
3. Add world section to map page

### New Badges
1. Define badge in mission JSON
2. Add badge display logic
3. Create badge metadata

---

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking (if using TypeScript)
npx astro check
```

---

## 🐛 Troubleshooting

### "Module not found: codemirror"
```bash
rm -rf node_modules package-lock.json
npm install
```

### localStorage not saving
- Check browser privacy settings
- Test in different browser
- Clear cache and try again

### CodeMirror not loading
- Check browser console for errors
- Verify CodeMirror installed: `npm list codemirror`
- Try: `npm install codemirror@latest`

---

## 📞 Getting Help

- **Issues**: Check existing issues or create new one
- **Questions**: Start a discussion
- **Feature Requests**: Open issue with `[Feature]` tag

---

## 🤝 Contributing

Want to help improve CodeCraft Odyssey?

1. Fork the repository
2. Create feature branch
3. Add missions or features
4. Test thoroughly
5. Submit pull request

**Mission Contribution Guidelines:**
- Clear instructions
- 3-5 test cases
- 3 progressive hints
- Engaging story
- Appropriate difficulty

---

## 📄 License

MIT License - Free to use, modify, and distribute!

---

## 🎯 Project Goals

**CodeCraft Odyssey** aims to:

✅ Make coding practice fun and engaging  
✅ Provide instant feedback on code  
✅ Build muscle memory through repetition  
✅ Progress from basics to advanced topics  
✅ Gamify the learning experience  
✅ Work completely offline  
✅ Be accessible to everyone (free!)

---

## 🗺️ Roadmap

### Current (v1.0 - MVP)
- [x] 5 missions (Levels 1-5)
- [x] Pixel retro theme
- [x] XP and leveling
- [x] localStorage persistence
- [x] Test validation
- [x] Hint system

### Next (v1.1)
- [ ] Levels 6-15
- [ ] Boss fight (Level 15)
- [ ] Badge showcase
- [ ] Player profile/stats
- [ ] Sound effects

### Future (v2.0+)
- [ ] All 100 levels
- [ ] 6 world themes
- [ ] Leaderboards
- [ ] Daily challenges
- [ ] Multiplayer features

---

**Ready to code? Let's go! 🚀**

```bash
npm run dev
```
