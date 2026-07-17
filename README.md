🐾 MEOW CAFÉ

A cozy, cat-themed one-page site built to demonstrate global theme
management with React's Context API — light/dark mode, persisted
across refreshes, toggleable from anywhere in the component tree.


✨ FEATURES

- Light / Dark theme via ThemeContext + useContext
- Theme choice persisted in localStorage (falls back to OS preference on first visit)
- useMemo / useCallback used in the context provider to avoid unnecessary re-renders
- Responsive navbar with a hamburger menu on mobile
- Clean, reusable component structure (Navbar, Hero, About, MenuSection, CatCard, Footer)


📸 SCREENSHOTS

Home - Light Mode
[add screenshot here: screenshots/home-light.png]

Home - Dark Mode
[add screenshot here: screenshots/home-dark.png]

About Section
[add screenshot here: screenshots/about.png]

Meet the Regulars (Cat Cards)
[add screenshot here: screenshots/menu.png]

Mobile View - Menu Closed
[add screenshot here: screenshots/mobile-closed.png]

Mobile View - Menu Open
[add screenshot here: screenshots/mobile-open.png]


🛠️ TECH STACK

- React 18
- Vite (build tool & dev server)
- Plain CSS with CSS variables for theming (no CSS framework)


📁 PROJECT STRUCTURE

src/
├── context/
│   └── ThemeContext.jsx    (Provider, useTheme hook, theme persistence)
├── components/
│   ├── Navbar.jsx           (Logo, nav links, hamburger menu, theme toggle)
│   ├── ThemeToggle.jsx      (Button that switches theme)
│   ├── Hero.jsx             (Landing headline + CTA)
│   ├── About.jsx            (Our Story section)
│   ├── MenuSection.jsx      (Renders CatCard list)
│   ├── CatCard.jsx          (Individual cat card)
│   ├── CatIllustration.jsx  (SVG cat illustration)
│   └── Footer.jsx
├── App.jsx
├── App.css
└── main.jsx


🚀 GETTING STARTED

Clone the repo and install dependencies:

  git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
  cd YOUR_REPO_NAME
  npm install

Run the dev server:

  npm run dev

Open the printed local URL (usually http://localhost:5173).


🌐 LIVE DEMO

Deployed via GitHub Pages:
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

Deploying it yourself:

  npm install gh-pages --save-dev
  npm run deploy

Then enable GitHub Pages in Settings → Pages, using the gh-pages
branch as the source.


📄 LICENSE

Built as a frontend learning assignment (Context API practice).
Free to use as a reference.
