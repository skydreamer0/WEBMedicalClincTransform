import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkveebw");

  return (
    <section id="contact" className="contact-section">
      <motion.div className="section-header">
        <h2>聯繫我們</h2>
        <p className="section-subtitle">
          讓我們為您的醫療機構打造專屬的數位轉型方案
        </p>
      </motion.div>

      <div className="contact-container">
        {/* 聯繫資訊部分 */}
        <motion.div className="contact-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div className="info-content">
              <h3>電話</h3>
              <p>0912-345-678</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div className="info-content">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div className="info-content">
              <h3>地址</h3>
              <p>台北市信義區信義路五段7號</p>
            </div>
          </div>
        </motion.div>

        {/* 表單部分 */}
        {state.succeeded ? (
          <motion.div className="success-message">
            <h3>感謝您的訊息！</h3>
            <p>我們會盡快與您聯繫。</p>
          </motion.div>
        ) : (
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">電話</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization">機構名稱</label>
                <input
                  id="organization"
                  type="text"
                  name="organization"
                />
                <ValidationError 
                  prefix="Organization" 
                  field="organization"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">訊息內容</label>
              <textarea
                id="message"
                name="message"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              {state.submitting ? '提交中...' : '送出諮詢'}
            </button>

            <ValidationError errors={state.errors} />
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact; 