import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  //定義特色
  const features = [
    { icon: '🔄', text: '全方位轉型', delay: 0.8 },
    { icon: '📱', text: '數位化升級', delay: 0.9 },
    { icon: '📊', text: '數據驅動', delay: 1.0 }
  ];

  //定義統計數據
  const stats = [
    { number: '50', symbol: '+', label: '成功案例', delay: 1.2 },
    { number: '98', symbol: '%', label: '客戶滿意度', delay: 1.3 },
    { number: '15', symbol: '+', label: '年專業經驗', delay: 1.4 }
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="animated-gradient"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          智慧醫療
          <br />
          <span className="gradient-text">創新轉型的開拓者</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          引領醫療機構邁向數位化未來，打造卓越服務體驗
        </motion.p>

        <motion.div 
          className="hero-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: feature.delay }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-text">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Link to="/contact" className="cta-button primary">
            開始諮詢
            <span className="button-icon">→</span>
          </Link>
          <Link to="/solutions" className="cta-button secondary">
            了解更多
          </Link>
        </motion.div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay }}
            >
              <div className="stat-number">
                <span className="counter">{stat.number}</span>
                <span className="symbol">{stat.symbol}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 