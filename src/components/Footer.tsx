import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="brand-line">MiniLab</div>
        <div className="links">
          <Link to="/support">Support</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="copyright">
          © 2026 Xuechun Sun. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
