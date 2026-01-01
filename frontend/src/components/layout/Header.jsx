import { Link } from "react-router-dom";
import "./css/Header.css";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="header-logo">
            <Link to="/" className="logo-link">
              <span className="logo-icon">🛍️</span>
              <span className="logo-text">ONLINE SHOP</span>
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className="header-nav">
            <Link to="/" className="nav-link">
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </Link>
            <Link to="/cart" className="nav-link">
              <span className="nav-icon">🛒</span>
              <span>Cart</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <span className="nav-icon">👤</span>
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;