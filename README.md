# 🌿 Shaik Banaganapalli Salma — Minimal Developer Portfolio

A minimal, pleasant, and high-performance portfolio website built for **Shaik Banaganapalli Salma** (B.Tech AI & ML student at RGUKT Ongole, Smart India Hackathon 2025 Winner, and Reliance Foundation Scholar).

---

## 📁 Directory Location

```plaintext
C:\Users\RGUKT\Desktop\PORTFOLIO
```

### Files Structure:
```
PORTFOLIO/
├── index.html           # Minimal semantic structure and accessibility
├── style.css            # Refined, pleasant, minimal design system (dark & light modes)
├── script.js            # Lightweight scripts for theme, typing, filters, and modals
├── README.md            # Portfolio documentation
└── assets/
    ├── README.md        # Guide on photos, screenshots, and resume PDF
    └── images/
        ├── favicon.svg                  # Minimalist tab icon
        ├── profile-avatar.svg           # Professional vector avatar
        ├── project-health-chatbot.svg   # SIH 2025 AI Healthcare Bot visual preview
        ├── project-alora-debugger.svg   # ALORA Smart Debugging Assistant preview
        ├── project-student-system.svg   # Student Management System dashboard preview
        └── project-railway-system.svg   # C Railway System console preview
```

---

## 🎨 Why This Redesign is Minimal & Pleasant

- **Eyes-friendly Palette**: Removed all intense neon background glows and high-glare blur orbs. Uses a soothing matte graphite (`#0e1015`) in dark mode and clean soft porcelain in light mode.
- **Refined Typography**: Clear, calm typography using *Inter* for body readability and *Outfit* for crisp headings.
- **Balanced Whitespace**: Generous margins, clean borders (`rgba(255, 255, 255, 0.08)`), and subtle hairline dividers.
- **Interactive Controls**:
  - Hero Tab Switcher: Easily toggle between your **Terminal Code profile** and your **Portrait avatar**.
  - Quick Resume Modal with clean 1-click **Print to PDF** styling.
  - One-click copy email button with quiet toast confirmation.
  - Interactive project case study popups.

---

## 🚀 How to Run Locally

Double-click [`index.html`](file:///C:/Users/RGUKT/Desktop/PORTFOLIO/index.html) in Windows File Explorer or open via terminal:
```powershell
cd C:\Users\RGUKT\Desktop\PORTFOLIO
python -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 🌐 Deploy to GitHub Pages

1. In your GitHub account [`shaiksalma12354-design`](https://github.com/shaiksalma12354-design), create a repository named `portfolio`.
2. In PowerShell, push the code:
   ```powershell
   cd C:\Users\RGUKT\Desktop\PORTFOLIO
   git init
   git add .
   git commit -m "feat: minimal and pleasant portfolio"
   git branch -M main
   git remote add origin https://github.com/shaiksalma12354-design/portfolio.git
   git push -u origin main
   ```
3. In GitHub Settings > **Pages**, choose the `main` branch to make it live!
