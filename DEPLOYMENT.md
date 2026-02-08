# 🚀 Deployment Guide

CodeCraft Odyssey is a static site that can be deployed to any static hosting platform for **FREE**!

---

## ☁️ Deployment Options

### 1. Cloudflare Pages (Recommended)

**Why Cloudflare?**
- ✅ Free unlimited bandwidth
- ✅ Global CDN (super fast)
- ✅ Auto HTTPS
- ✅ Easy CI/CD from GitHub

**Steps:**

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project**
4. Connect your GitHub repo
5. Configure build:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
   - **Node version**: 18+
6. Click **Deploy**

**Done!** Your site will be live at: `your-project.pages.dev`

---

### 2. Netlify

**Steps:**

1. Push to GitHub
2. Go to [Netlify](https://netlify.com/)
3. Click **Add new site** → Import from Git
4. Select your repo
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy**

**Done!** Live at: `your-project.netlify.app`

---

### 3. Vercel

**Steps:**

1. Push to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click **New Project**
4. Import your repo
5. Vercel auto-detects Astro
6. Click **Deploy**

**Done!** Live at: `your-project.vercel.app`

---

### 4. GitHub Pages

**Steps:**

1. Install Astro GitHub Pages adapter:
```bash
npm install @astrojs/netlify
```

2. Update `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/codecraft-odyssey',
  output: 'static'
});
```

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v1
        id: deployment
```

4. Push to GitHub
5. Go to **Settings** → **Pages** → Enable GitHub Actions

**Done!** Live at: `your-username.github.io/codecraft-odyssey`

---

## 🔧 Build Optimization

### Before Deploying

1. **Test production build locally:**
```bash
npm run build
npm run preview
```

2. **Check bundle size:**
```bash
npm run build
# Look for dist/ folder size
```

3. **Optimize images** (if you add any):
```bash
# Use webp format
# Compress with tools like squoosh.app
```

---

## 🌍 Custom Domain

### Cloudflare Pages

1. Go to **Custom domains**
2. Add your domain
3. Update DNS records (Cloudflare provides instructions)

### Netlify

1. Go to **Domain settings**
2. Add custom domain
3. Update DNS or use Netlify DNS

### Vercel

1. Go to **Settings** → **Domains**
2. Add domain
3. Update DNS records

---

## 📊 Performance Tips

After deployment, check:

1. **Lighthouse Score** (aim for 90+)
2. **PageSpeed Insights**
3. **GTmetrix**

**Expected Performance:**
- Load time: <1 second
- First Contentful Paint: <0.5s
- Lighthouse Score: 95+

---

## 🔒 Security

**Automatic with static hosting:**
- ✅ HTTPS enabled
- ✅ No server vulnerabilities
- ✅ No database attacks
- ✅ DDoS protection (Cloudflare)

**Note:** User code runs client-side only (sandboxed in Function constructor)

---

## 📱 PWA (Optional)

Want offline support?

1. Add service worker
2. Create `manifest.json`
3. Enable in `astro.config.mjs`

**Guide:** [Astro PWA docs](https://docs.astro.build/en/guides/integrations-guide/)

---

## 🚨 Troubleshooting

### Build fails on deployment

**Error:** "Module not found: codemirror"

**Fix:** Ensure `package.json` has correct dependencies:
```bash
npm install
npm run build
```

### Page not loading

**Check:**
- Base path in `astro.config.mjs`
- 404 errors in browser console
- Build output in `dist/` folder

### localStorage not working

**Note:** localStorage works in all modern browsers. If issues:
- Check browser privacy settings
- Test in incognito mode
- Clear browser cache

---

## 📈 Analytics (Optional)

Add free analytics:

### 1. Cloudflare Web Analytics
- Go to Cloudflare dashboard
- Enable Web Analytics
- Add script tag to `BaseLayout.astro`

### 2. Google Analytics
```html
<!-- Add to BaseLayout.astro <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### 3. Plausible (Privacy-focused)
```html
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

---

## ✅ Pre-Deployment Checklist

- [ ] All missions tested locally
- [ ] Production build works: `npm run build && npm run preview`
- [ ] No console errors
- [ ] localStorage saving/loading works
- [ ] Responsive on mobile
- [ ] Fast loading (<2s)
- [ ] README updated
- [ ] License file added
- [ ] GitHub repo created
- [ ] Deployment platform chosen

---

## 🎉 You're Ready!

Your CodeCraft Odyssey game is now live and accessible worldwide!

**Share it:**
- Twitter/X: "Check out my coding game! 🎮"
- Reddit: r/webdev, r/learnprogramming
- Dev.to: Write a blog post
- Hacker News: Show HN

**Next steps:**
- Monitor analytics
- Add more missions
- Get feedback from players
- Iterate and improve!

---

**Need help?** Open an issue on GitHub!
