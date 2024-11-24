import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: '專業承諾',
      description: '擁有15年以上醫療資訊系統開發經驗，深入理解醫療機構需求'
    },
    {
      icon: '💡',
      title: '創新思維',
      description: '持續引進最新科技，為醫療機構打造領先市場的解決方案'
    },
    {
      icon: '🤝',
      title: '誠信服務',
      description: '以客戶需求為核心，提供透明且可靠的合作關係'
    }
  ];

  const team = [
    {
      name: '張醫師',
      title: '醫療顧問',
      image: '👨‍⚕️',
      description: '擁有20年臨床經驗，專注於醫療流程優化'
    },
    {
      name: '王工程師',
      title: '技術總監',
      image: '👨‍💻',
      description: '資深系統架構師，專精醫療資訊系統開發'
    },
    {
      name: '李經理',
      title: '專案經理',
      image: '👩‍💼',
      description: '豐富的醫療產業專案管理經驗'
    }
  ];

  return (
    <section className="about-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>關於我們</h2>
        <p className="section-subtitle">
          專注於醫療資訊系統開發，致力於提升醫療服務品質
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="values-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="team-section">
          <motion.h3 
            className="team-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            專業團隊
          </motion.h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="member-image">{member.image}</div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span className="member-title">{member.title}</span>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 