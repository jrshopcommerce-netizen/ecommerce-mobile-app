# JR Shop Commerce - Branding Guide

## 🐝 Logo & Brand Identity

### Logo
**JR Shop** - Happy bee with shopping bag mascot
- **Tagline**: "Belanja Jadi Mudah, Setiap Saat!" (Shopping Made Easy, Always!)
- **Color Scheme**: Orange, Yellow, Blue
- **Style**: Modern, friendly, approachable

### Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Orange | `#FF6B35` | Primary actions, buttons, highlights |
| Dark Orange | `#E55100` | Hover states, active states |
| Yellow | `#FFD700` | Accents, ratings, highlights |
| Blue | `#1E88E5` | Secondary elements, links |
| Light Gray | `#F5F5F5` | Backgrounds |
| Dark Gray | `#333333` | Text |

## 📱 App Logo Integration

### Step 1: Add Logo Files

Create `assets/` folder and add:
- `logo.png` - Main logo (192x192px)
- `logo-small.png` - Small icon (64x64px)
- `splash-screen.png` - Splash screen (1200x1200px)

```
assets/
├── logo.png
├── logo-small.png
├── splash-screen.png
├── adaptive-icon.png
└── favicon.png
```

### Step 2: Update App Configuration

Edit `app.json`:

```json
{
  "expo": {
    "name": "JR Shop Commerce",
    "slug": "jrshop-commerce",
    "version": "1.0.0",
    "icon": "./assets/logo.png",
    "splash": {
      "image": "./assets/splash-screen.png",
      "resizeMode": "contain",
      "backgroundColor": "#FF6B35"
    },
    "ios": {
      "bundleIdentifier": "com.jrshop.commerce",
      "supportsTabletMode": true
    },
    "android": {
      "package": "com.jrshop.commerce",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FF6B35"
      }
    }
  }
}
```

### Step 3: Add Logo to HomeScreen

Use the `AppLogo` component included in `src/components/AppLogo.js`

## 🎨 Design System

### Typography

```javascript
// Header
fontSize: 24
fontWeight: 'bold'
color: '#333'

// Subheader
fontSize: 18
fontWeight: '600'
color: '#666'

// Body
fontSize: 14
fontWeight: '400'
color: '#333'

// Caption
fontSize: 12
fontWeight: '400'
color: '#999'
```

### Spacing

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
```

### Border Radius

```
sm: 4px
md: 8px
lg: 12px
xl: 16px
full: 999px
```

## 📸 Logo Usage Guidelines

### ✅ Do's
- Use on light backgrounds
- Maintain clear space around logo
- Use original colors
- Use in horizontal or vertical orientation

### ❌ Don'ts
- Don't distort or stretch
- Don't change colors
- Don't add drop shadows
- Don't rotate or flip
- Don't use on dark backgrounds without contrast

## 🌐 Social Media & Web

### Web Logo
- `favicon.ico` for browser tabs
- `logo-web.png` for website header

### Social Media
- Instagram Profile Picture: 400x400px (logo-small.png)
- Facebook Cover: 1200x628px
- Twitter Header: 1500x500px

---

**Brand Guidelines Version**: 1.0
**Last Updated**: 2026-06-26