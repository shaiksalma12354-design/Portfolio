# 📁 Assets Directory Guide

This folder houses the visual assets, vector graphics, project preview mockups, and icons used throughout the **Shaik Banaganapalli Salma Portfolio**.

---

## 🗂 Current File Structure

```
assets/
└── images/
    ├── favicon.svg                  # Browser tab icon (Cyan/Violet terminal symbol)
    ├── profile-avatar.svg           # Tech-themed vector avatar illustration with neural aura
    ├── project-health-chatbot.svg   # SIH 2025 Winning AI Health Chatbot visual preview
    ├── project-alora-debugger.svg   # CodeEdge Hackathon ALORA Smart Debugger visual preview
    ├── project-student-system.svg   # Flask & SQL Student Portal visual preview
    └── project-railway-system.svg   # C-based Railway Reservation System visual preview
```

---

## 📸 How to Customize With Your Own Photos & Screenshots

### 1. Adding Your Real Profile Photo
To use your real photograph instead of the vector avatar:
1. Save your photograph into `assets/images/` as **`profile.jpg`** (or `profile.png`).
   - *Recommended dimensions*: 500 × 500 px (square aspect ratio, clean background).
2. Open [`index.html`](file:///C:/Users/RGUKT/.gemini/antigravity/scratch/salma-portfolio/index.html) and locate the Hero Visual section.
3. Replace:
   ```html
   <img src="assets/images/profile-avatar.svg" alt="Shaik Salma Avatar" />
   ```
   with:
   ```html
   <img src="assets/images/profile.jpg" alt="Shaik Banaganapalli Salma" />
   ```

### 2. Adding Real Project Screenshots
If you have live screenshots or UI captures from your projects:
- Save them into `assets/images/` (e.g., `health-bot-demo.png`, `alora-demo.png`).
- *Recommended dimensions*: 800 × 450 px (16:9 widescreen ratio).
- Update the `src` attribute of the corresponding `<img class="project-thumb" ...>` tag in `index.html`.

### 3. Adding Your Resume PDF
To allow visitors to directly download your official resume file:
1. Save your resume PDF as **`Salma_Shaik_Resume.pdf`** directly inside the `assets/` folder.
2. In `index.html`, find the "Download Resume" link and set:
   ```html
   <a href="assets/Salma_Shaik_Resume.pdf" download class="btn btn-secondary">
     <i class="fa-solid fa-download"></i> Download Resume PDF
   </a>
   ```
