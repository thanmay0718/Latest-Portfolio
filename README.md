# Developer Portfolio — Racha Tanmay Sri Vardhan

A minimal, editorial developer portfolio built for **Racha Tanmay Sri Vardhan (Bunny)**, Full-Stack Developer and B.Tech CSE student at KL University (CGPA 8.97). Designed around a single unified color-token system (light/dark themes), Arial-only typography, a cinematic full-screen entry sequence, and a fully data-driven architecture.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v4 with a shared CSS custom-property token system (`--bg-base`, `--text-primary`, `--accent`, etc.) driving both light and dark mode
- **Animations**: Framer Motion & Lenis smooth scrolling (disabled on touch devices for native scroll feel)
- **Entry Experience**: A full-screen `EntryGate` landing sequence — full-bleed grayscale portrait background, minimal centered typography, and a real asset-loading percentage counter that auto-transitions into the site
- **Icons**: `lucide-react`
- **Typography**: Arial / Helvetica Neue system stack sitewide — no serif or display webfonts
- **Interactive Effects**: `canvas-confetti` on form submit/email copy, magnetic spring buttons, cursor-following spotlight on cards (desktop only)

---

## 🎨 Design System

- **One accent hue** across the whole site (light and dark variants of the same color) — no competing gold/blue accents.
- **Background**: a static, low-cost layered treatment (dot grid + soft glow + grain) rather than a real-time 3D particle scene, kept lightweight for mobile performance.
- **Typography scale**: Arial throughout, with a dedicated mono stack reserved for eyebrow labels, chips, and metadata.
- **Entry sequence**: shown once per browser session via `sessionStorage`; skippable, respects `prefers-reduced-motion`, and gates the rest of the app until asset loading completes.

---

## 🚀 Getting Started Locally

```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Install dependencies (if not already installed)
npm install --legacy-peer-deps

# 3. Start the local development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

To build for production:

```bash
npm run build
npm run preview
```

---

## 📁 How to Update Content (Data-Driven Architecture)

All content is cleanly separated from UI components inside `src/data/`. You can update your portfolio without altering React code:

| File Path | Description |
| :--- | :--- |
| `src/data/profile.ts` | Personal bio, cycling roles, headline, placement goal, contact details, social links, and key stats. |
| `src/data/projects.ts` | Detailed case studies (GigSure, E-Commerce, HomeEase, Capstone) with architecture flow steps, tech stack tags, challenges, metrics, and links. |
| `src/data/skills.ts` | Categorized tech arsenal (Languages, Backend, Frontend, Databases, Cloud, Tools, CS Fundamentals). |
| `src/data/experience.ts` | Timeline entries for internships (Google for Developers & AICTE-EduSkills Virtual Internship). |
| `src/data/certifications.ts` | Credential cards for Microsoft Azure AZ-900, Oracle Cloud, and future certifications. |
| `src/data/education.ts` | KL University B.Tech CSE coursework, CGPA, and academic honors. |

---

## 🖼️ Entry Gate Asset

The `EntryGate` component expects a full-bleed portrait photo at:

```
src/assets/entry-photo.jpg   (or public/entry-photo.jpg for a static-served path)
```

Swap this file to update the landing image — no code changes required for a like-for-like replacement.

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/thanmay0718/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` GitHub repository.
4. Select **Vite** as the framework preset (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.

### 2. Deploying to Netlify
1. Log in to [Netlify](https://netlify.com) and select **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Set Build Command: `npm run build` and Publish directory: `dist`.
4. Click **Deploy Site**.

### 3. Deploying to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`.
2. Add `"homepage": "https://thanmay0718.github.io/portfolio"` to `package.json`.
3. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
4. Run `npm run build && npm run deploy`.

---

## 📝 Summary of `[FILL]` Placeholders Requiring Your Update

Below is a complete checklist of `[FILL]` placeholders reserved in the data files for you to populate with exact metrics:

1. **`src/data/projects.ts` — E-Commerce Platform**:
   - UI redesign notes (e.g. glassmorphism cart drawer, smooth checkout flow)
   - Extra backend features (e.g. payment gateway integration, automated invoice dispatches)
   - Performance benchmarks or test coverage metrics

2. **`src/data/projects.ts` — Multilingual Aspect-Based Sentiment & Stance Platform (Capstone)**:
   - Specific problem statement & target domain context
   - Exact ML model architecture & tools (e.g., mBERT, XLM-RoBERTa, PyTorch)
   - Evaluation metrics (Accuracy %, F1-score)
   - Faculty supervisor or research lab credit (if applicable)

3. **`src/data/certifications.ts` — Oracle Cloud Infrastructure 2025**:
   - Exact certification title & level (e.g., *OCI Foundations Associate* / *Architect Associate*)
   - Official Credential ID & Verification URL

4. **`src/data/education.ts` — KL University B.Tech CSE**:
   - Competitive programming profiles (e.g. LeetCode problems solved count, CodeChef rating)
   - Hackathon awards, coding competition rankings, or departmental honors
