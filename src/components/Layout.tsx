import { ReactNode } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <Link to="/" className="brand">
            MiniLab
          </Link>
          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
