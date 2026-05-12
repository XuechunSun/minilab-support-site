import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "MiniLab – Experiments for Everyday Life";
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>MiniLab</h1>
        <p className="subtitle">Experiments for everyday life.</p>
        <p className="lead">
          MiniLab is a lightweight reflection app for trying small experiments,
          logging daily notes, and noticing patterns over time.
        </p>
      </div>

      <div className="card-grid">
        <Link to="/support" className="card">
          <h3>Support</h3>
          <p>FAQ, contact info, and how to report bugs or request features.</p>
        </Link>
        <Link to="/privacy" className="card">
          <h3>Privacy Policy</h3>
          <p>
            How MiniLab handles your data. Local-first, no accounts, no
            trackers.
          </p>
        </Link>
      </div>
    </section>
  );
}
