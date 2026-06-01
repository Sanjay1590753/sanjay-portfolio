import "./App.css";

function App() {
  return (
    <main className="portfolio-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="welcome-badge">👋 Welcome to my portfolio</div>

          <h1>
            Hi, I’m <br />
            <span>Sanjay Dhanapal</span>
          </h1>

          <h2>Technical Support Analyst | Aspiring Software Developer</h2>

          <p>
            I build clean, responsive, and user-friendly web applications. With
            a strong foundation in technical support and a passion for
            problem-solving, I enjoy turning ideas into real-world solutions
            through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects ↗
            </a>
            <a href="/resume.pdf" className="secondary-btn">
              Download Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">SD</div>

          <div className="learning-list">
            <h3>Currently Learning</h3>
            <p>⚛️ React</p>
            <p>☕ Java</p>
            <p>🧠 DSA</p>
            <p>🐙 GitHub</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
