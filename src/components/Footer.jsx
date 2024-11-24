import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <h3>聯絡資訊</h3>
          <p>電話：(02) 2345-6789</p>
          <p>地址：台北市信義區信義路100號</p>
          <p>Email：contact@medical-transform.com</p>
        </div>
        <div className="footer-links">
          <h3>快速連結</h3>
          <ul>
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/solutions">解決方案</Link></li>
            <li><Link to="/cases">成功案例</Link></li>
            <li><Link to="/contact">聯繫我們</Link></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 醫療機構轉型解決方案. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 