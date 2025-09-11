# Figma Dashboard (Angular Project)

This project is an Angular scaffold generated from your Figma dashboard design.  
It includes **Overview**, **Profile**, and **Withdraw** pages, plus reusable components (Header, Sidebar, Card, Table).

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/figma-dashboard.git
cd figma-dashboard
```

### 2. Install dependencies

```bash
npm install -g @angular/cli
npm install
```

### 3. Run locally

```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 📂 Project Structure

```
src/app/
├─ shared/
│  ├─ components/
│  │  ├─ header/
│  │  ├─ sidebar/
│  │  ├─ card/
│  │  └─ table/
│  └─ styles/
│     ├─ _variables.scss
│     ├─ _mixins.scss
│     └─ _typography.scss
├─ pages/
│  ├─ overview/
│  ├─ profile/
│  └─ withdraw/
└─ app-routing.module.ts
```

---

## 📊 Features

- **Overview Page** → Students count, profit, charts (mock data included)
- **Profile Page** → Personal info, social media links
- **Withdraw Page** → Balance, withdrawal form, transaction history table
- **Reusable UI Components** → Header, Sidebar, Card, Table
- **SCSS Theming** → `_variables.scss` for colors, fonts, spacing

---

## 🖼️ Screenshots

_Add screenshots of the running app here after you run `ng serve`._

---

## 📦 Deployment

To build for production:

```bash
ng build --configuration production
```

This will generate a `/dist` folder ready for deployment (Netlify, Vercel, GitHub Pages, etc.).

---

## 📌 Notes

- Replace placeholder values in SCSS variables with your Figma colors & fonts.
- Add assets (logos, icons) into `src/assets/`.
- Extend charts with real API data if available.

---

## 👨‍💻 Author

- Generated for **Ahmed Mohamed** (influencer dashboard example)
- Built with Angular CLI, SCSS, and reusable components.
