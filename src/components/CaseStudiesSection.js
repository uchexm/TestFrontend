// CaseStudiesSection.js
import React from 'react';
import './CaseStudiesSection.css'; // Separate CSS file for styling

const CaseStudiesSection = () => {
  const caseStudiesData = [
    {
      name: 'The Olympian',
      image: './images/olympian.jpeg',
      description: 'The only athlete in the world to do her Olympic routine in 2020.              ',
    },
    {
      name: 'The Savings Jar',
      image: './images/dragon.jpeg',
      description: 'Grow your savings treasure and grow your dragon.',
    },
    {
      name: 'Skhokho seMali',
      image: './images/skhokho.jpeg',
      description: 'Helping South Africans become #CashCleva with Skhokho and TymeBank.',
    },
  ];

  return (
    <section className="case-studies-section">
      <div className="case-studies-header">

        <p className='rectangle-icon'></p>
        Case Studies


      </div>
      <div className="case-studies-cards">
        {caseStudiesData.map((caseStudy, index) => (
          <div key={index} className="case-study-card">
            <div className="card-image" style={{ backgroundImage: `url(${caseStudy.image})` }}>
              <h1 className="case-study-name">{caseStudy.name}</h1>
              <p className="case-study-description">{caseStudy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
