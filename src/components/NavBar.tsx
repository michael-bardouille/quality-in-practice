import { useState } from 'react';
import { navLinks } from '../constants';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="nav-container">
        <img src="/logo-silver.svg" alt="Site Logo" />
        <ul className="nav-links">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href="/">{label}</a>
            </li>
          ))}
        </ul>
        <a className="resume-link" href="/resume.pdf" target="_blank">
          Resume
        </a>

        <button
          className="hamburger-button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label }) => (
            <a key={label} href="/" onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" onClick={() => setIsMenuOpen(false)}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
