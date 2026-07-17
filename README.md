# 🐾 Meow Café

A cozy, cat-themed one-page site built to demonstrate global theme management with React's Context API — light/dark mode, persisted across refreshes, toggleable from anywhere in the component tree.

## ✨ Features

- 🎨 Light / Dark theme via ThemeContext + useContext
- 💾 Theme choice persisted in localStorage (falls back to OS preference on first visit)
- ⚡ useMemo / useCallback used in the context provider to avoid unnecessary re-renders
- 📱 Responsive navbar with a hamburger menu on mobile
- 🌸 Clean, reusable component structure (Navbar, Hero, About, MenuSection, CatCard, Footer)

## 📸 Screenshots

### Home Page (Light Mode)
![Home Light](./screenshots/home-light.png)

### Home Page (Dark Mode)
![Home Dark](./screenshots/home-dark.png)

### About Section
![About Section](./screenshots/about.png)

### Menu Section (Meet the Regulars)
![Menu Section](./screenshots/menu.png)


## 🛠️ Tech Stack

- React 18
- Vite — build tool & dev server
- Plain CSS with CSS variables for theming (no CSS framework)

## 📁 Project Structure

src/

├── context/

│   └── ThemeContext.jsx    # Provider, useTheme hook, theme persistence

├── components/

│   ├── Navbar.jsx           # Logo, nav links, hamburger menu, theme toggle

│   ├── ThemeToggle.jsx      # Button that switches theme

│   ├── Hero.jsx             # Landing headline + CTA

│   ├── About.jsx            # "Our Story" section

│   ├── MenuSection.jsx      # Renders CatCard list

│   ├── CatCard.jsx          # Individual cat card

│   ├── CatIllustration.jsx  # SVG cat illustration

│   └── Footer.jsx

├── App.jsx

├── App.css

└── main.jsx


## 🚀 Getting Started

Clone the repo and install dependencies:

git clone https://github.com/sidraliaqat/cat-cafe.git
cd cat-cafe
npm install

Run the dev server:

npm run dev
