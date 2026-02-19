# Analytics Dashboard

Interactive analytics dashboard built with React, TypeScript, and Recharts.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
```

Creates `dist/` folder ready for deployment.

## 🌐 Deploy to GitHub Pages

1. **Create a new repo on GitHub:**
   - Name: `dashboard`
   - Initialize empty (no README)

2. **Push this code:**

   ```bash
   git init
   git add .
   git commit -m "Initial dashboard"
   git branch -M main
   git remote add origin https://github.com/kenpopaul/dashboard.git
   git push -u origin main
   ```

3. **Build and deploy:**

   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git subtree push --prefix dist origin gh-pages
   ```

4. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: `gh-pages` branch
   - Save

5. **Dashboard will be live at:**
   `https://YOUR_USERNAME.github.io/dashboard/`

## 🔄 Update After Changes

```bash
npm run build
git add dist -f
git commit -m "Update dashboard"
git subtree push --prefix dist origin gh-pages
```

## ✨ Features

- 📊 Interactive charts with Recharts
- 🌓 Dark mode toggle
- 📱 Fully responsive
- ⚡ Fast and lightweight
- 🎨 Clean, modern design

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Recharts
- Vite

## 📝 License

Built by Paul Nix - https://paulnix.co.uk
