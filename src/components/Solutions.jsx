import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: '診所管理系統',
      description: '現代化的診所管理解決方案，提升運營效率',
      features: ['預約管理', '電子病歷', '庫存管理']
    },
    {
      title: '病患服務優化',
      description: '提升病患服務體驗，建立長期信任關係',
      features: ['線上預約', '就醫提醒', '滿意度調查']
    },
    {
      title: '數位化轉型',
      description: '全面數位化解決方案，實現智慧醫療',
      features: ['雲端系統', '數據分析', '遠程診療']
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <h2>解決方案</h2>
      <div className="solution-cards">
        {solutions.map((solution, index) => (
          <div key={index} className="card">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions; 