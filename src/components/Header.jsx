import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <span className="logo-icon">🏥</span>
          醫療轉型
        </Link>

        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="導航選單"
        >
          <span className="mobile-menu-icon"></span>
        </button>

        <ul className={isMenuOpen ? 'active' : ''}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>首頁</Link></li>
          <li><Link to="/solutions" onClick={() => setIsMenuOpen(false)}>解決方案</Link></li>
          <li><Link to="/cases" onClick={() => setIsMenuOpen(false)}>成功案例</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>關於我們</Link></li>
          <li>
            <Link 
              to="/contact" 
              className="nav-button"
              onClick={() => setIsMenuOpen(false)}
            >
              聯繫我們
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 