import {
  FaGithub,
  FaJava,
  FaReact,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { profile } from "../../data/profile";
import "./Hero.css";

const learningIcons = {
  React: <FaReact />,
  Java: <FaJava />,
  DSA: <SiLeetcode />,
  GitHub: <FaGithub />,
  "Full-Stack Development": <MdWork />,
};

const skillClassNames = {
  React: "react",
  Java: "java",
  DSA: "dsa",
  GitHub: "github",
  "Full-Stack Development": "fullstack",
};

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">👋 Welcome to my portfolio</p>

          <h1 className="hero__title">
            Hi, I’m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero__role">{profile.role}</p>

          <p className="hero__description">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              View Projects <FaArrowUp className="hero__button-icon" />
            </a>

            <a href="#resume" className="hero__button hero__button--secondary">
              Download Resume <FaDownload className="hero__button-icon" />
            </a>
          </div>
        </div>

        <div className="hero__profile-card glass-card">
          <div className="hero__profile-main">
            <div className="hero__avatar">
              <span>SD</span>
            </div>

            <div className="hero__learning">
              <h2>Currently Learning</h2>

              <div className="hero__learning-list">
                {profile.currentlyLearning.map((skill) => (
                  <div className="hero__learning-item" key={skill}>
                    <span
  className={`hero__learning-icon hero__learning-icon--${skillClassNames[skill]}`}
>
  {learningIcons[skill]}
</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        <div className="hero__info-card">
  <div className="hero__info-item">
    <p>Available for</p>
    <strong>Opportunities</strong>
  </div>

  <div className="hero__info-item">
    <p>Location</p>
    <strong>{profile.location}</strong>
  </div>

  <div className="hero__info-item">
    <p>Email</p>
    <strong>{profile.email}</strong>
  </div>
</div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;