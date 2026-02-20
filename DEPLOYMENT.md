# Deployment Guide

This guide will help you deploy your React portfolio to various hosting platforms.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy React applications.

**Steps:**
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Vercel will auto-detect Vite and deploy

---

### 2. Netlify

**Using Netlify CLI:**
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Your site is live!

---

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Build:
```bash
npm run build
```

5. Deploy:
```bash
firebase deploy
```

---

## 📝 Pre-Deployment Checklist

- [ ] Test the production build locally: `npm run build && npm run preview`
- [ ] Check all links work correctly
- [ ] Verify all images load
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Optimize images if needed
- [ ] Update meta tags in `index.html` for SEO
- [ ] Add favicon
- [ ] Test performance with Lighthouse

---

## 🔧 Build Configuration

The default build command is:
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Build Output
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Source maps (optional)

---

## 🌐 Custom Domain

### Vercel
1. Go to your project settings
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration steps

---

## 📊 Performance Optimization

Before deploying, consider:

1. **Image Optimization**: Use WebP format
2. **Code Splitting**: Already handled by Vite
3. **Lazy Loading**: Implement for images
4. **Caching**: Configure headers
5. **CDN**: Use platform's CDN

---

## 🔒 Environment Variables

If you need environment variables:

1. Create `.env` file (already in `.gitignore`)
2. Add variables with `VITE_` prefix:
```
VITE_API_KEY=your_key_here
```

3. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

4. Set environment variables in your hosting platform's dashboard

---

## 🐛 Troubleshooting

### Build Fails
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### 404 on Refresh
- Configure your hosting platform for SPA routing
- For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

### Assets Not Loading
- Check `base` in `vite.config.js`
- Verify asset paths are relative

---

## 📱 Testing Production Build

Always test before deploying:

```bash
npm run build
npm run preview
```

Then open `http://localhost:4173` to test.

---

## 🎯 Recommended: Vercel

For this portfolio, **Vercel** is recommended because:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free tier is generous
- Great performance

---

Happy Deploying! 🚀
