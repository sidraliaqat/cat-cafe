import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">🐾 Meow Café</div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#about" onClick={closeMenu}>About</a>
      </div>

      <div className="navbar-right">
        <ThemeToggle />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;