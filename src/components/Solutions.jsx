import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      icon: '🏥',
      title: '智慧醫療管理',
      description: '整合醫療資源，優化診所營運流程，提升服務效率',
      features: ['預約管理系統', '電子病歷整合', '智能排程系統']
    },
    {
      icon: '💊',
      title: '藥品智能管理',
      description: '數位化藥品管理，確保庫存精準，降低營運成本',
      features: ['庫存即時監控', '智能補貨提醒', '用藥追蹤系統']
    },
    {
      icon: '📱',
      title: '病患服務升級',
      description: '打造全方位數位化服務體驗，提升病患滿意度',
      features: ['線上掛號系統', '就醫提醒服務', '診後追蹤管理']
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-header"
      >
        <h2>解決方案</h2>
        <p className="section-subtitle">
          為您的醫療機構打造量身定制的數位轉型方案
        </p>
      </motion.div>

      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="solution-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="solution-icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul className="solution-features">
              {solution.features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-bullet">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              className="learn-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
              <span className="arrow">→</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions; 