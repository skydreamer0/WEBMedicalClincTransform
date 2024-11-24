import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">🏥</span>
              醫療轉型
            </Link>
            <p className="footer-description">
              專注於醫療資訊系統開發，致力於提升醫療服務品質
            </p>
          </div>
          <div className="footer-contact">
            <h4>聯絡資訊</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(02) 2345-6789</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>台北市信義區信義路100號</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>contact@medical-transform.com</span>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h4>快速連結</h4>
            <ul>
              <li><Link to="/">首頁</Link></li>
              <li><Link to="/solutions">解決方案</Link></li>
              <li><Link to="/cases">成功案例</Link></li>
              <li><Link to="/contact">聯繫我們</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 醫療機構轉型解決方案. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 