function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Amman Malek</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#achievements">Achievements</a>
        </li>

        <li>
          <a href="#leadership">Leadership</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;