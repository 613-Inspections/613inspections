export function NavBar() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <a className="nav-link scrollto active" href="#hero">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#team">
            Team
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#reviews">
            Reviews
          </a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}
