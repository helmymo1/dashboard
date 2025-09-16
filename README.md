# Figma Dashboard (Angular Project)

This project is an Angular scaffold generated from your Figma dashboard design.  
It includes **Overview**, **Profile**, and **Withdraw** pages, plus reusable components (Header, Sidebar, Card, Table).

---

## Setup

```bash
npm ci
npm run start
```

## Build

```bash
npm run build
```

## Deploy to Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `dist/dashboard`
- **Node**: `18.x`

## API Environment Variables

The API endpoint is configured in the environment files located at `src/environments/`.

- `src/environments/environment.ts`: Used for local development.
  - `apiUrl`: `http://localhost:3000`
- `src/environments/environment.prod.ts`: Used for production builds.
  - `apiUrl`: `https://api.cosqool.com`

When deploying to Vercel, you can override these variables by setting environment variables in your Vercel project settings.

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

_Add screenshots of the running app here after you run `npm run start`._

---

## 📌 Notes

- Replace placeholder values in SCSS variables with your Figma colors & fonts.
- Add assets (logos, icons) into `src/assets/`.
- Extend charts with real API data if available.

---

## 👨‍💻 Author

- Generated for **Ahmed Mohamed** (influencer dashboard example)
- Built with Angular CLI, SCSS, and reusable components.
