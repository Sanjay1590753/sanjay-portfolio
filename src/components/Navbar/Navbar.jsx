import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href="#home" className="navbar__logo">
          Sanjay<span>.dev</span>
        </a>

        <nav className="navbar__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar__actions">
          <a href="#resume" className="navbar__resume">
            Resume
          </a>

          <a
            href={profile.socials.github}
            className="navbar__icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href={profile.socials.linkedin}
            className="navbar__icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;