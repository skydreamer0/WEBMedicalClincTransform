import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">醫療轉型方案</div>
        <ul>
          <li><Link to="/">首頁</Link></li>
          <li><Link to="/solutions">解決方案</Link></li>
          <li><Link to="/cases">成功案例</Link></li>
          <li><Link to="/contact">聯繫我們</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 