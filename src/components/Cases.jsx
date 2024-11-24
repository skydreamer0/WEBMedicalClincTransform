import React from 'react';
import { motion } from 'framer-motion';

const Cases = () => {
  const cases = [
    {
      title: '仁愛醫院數位轉型',
      category: '綜合醫院',
      image: '🏥',
      results: [
        '門診效率提升40%',
        '病患滿意度增加35%',
        '營運成本降低25%'
      ],
      description: '透過全面數位化升級，優化醫療流程，提升服務品質。'
    },
    {
      title: '康德診所智慧升級',
      category: '專科診所',
      image: '👨‍⚕️',
      results: [
        '預約率提升60%',
        '等候時間減少50%',
        '複診率提升30%'
      ],
      description: '導入智慧預約系統，改善病患體驗，提高診所營運效率。'
    },
    {
      title: '永康醫療集團轉型',
      category: '醫療集團',
      image: '🏢',
      results: [
        '集團營收成長45%',
        '分院管理效率提升55%',
        '人力成本優化20%'
      ],
      description: '建立集團化管理平台，實現資源整合與效益最大化。'
    }
  ];

  return (
    <section id="cases" className="cases-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>成功案例</h2>
        <p className="section-subtitle">
          見證醫療機構的蛻變之路，實現卓越經營
        </p>
      </motion.div>

      <div className="cases-grid">
        {cases.map((case_, index) => (
          <motion.div
            key={index}
            className="case-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="case-header">
              <span className="case-icon">{case_.image}</span>
              <div className="case-category">{case_.category}</div>
            </div>
            <h3 className="case-title">{case_.title}</h3>
            <p className="case-description">{case_.description}</p>
            <div className="case-results">
              <h4>成效展示</h4>
              <ul>
                {case_.results.map((result, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (i * 0.1) }}
                  >
                    <span className="result-bullet">✓</span>
                    {result}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.button
              className="case-detail-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看詳情
              <span className="arrow">→</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cases; 