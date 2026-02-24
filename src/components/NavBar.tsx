import { navLinks } from '../constants';

function NavBar() {
  return (
    <header>
      <nav>
        <img src="/logo-silver.svg" alt="Site Logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href="/">{label}</a>
            </li>
          ))}
        </ul>
        <a href="/resume.pdf" target="_blank">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
