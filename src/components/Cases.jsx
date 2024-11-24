import React from 'react';

const Cases = () => {
  const cases = [
    {
      title: '仁愛醫院轉型計劃',
      description: '從傳統診所到現代化醫療中心的成功轉型'
    },
    {
      title: '康德診所數位化',
      description: '實現全面數位化管理的典範'
    }
  ];

  return (
    <section id="cases" className="cases">
      <h2>成功案例</h2>
      <div className="case-studies">
        {cases.map((case_, index) => (
          <div key={index} className="case">
            <div className="case-image">
              <span>案例圖片</span>
            </div>
            <h3>{case_.title}</h3>
            <p>{case_.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases; 