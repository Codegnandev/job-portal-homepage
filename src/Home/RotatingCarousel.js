import React, { useState, useEffect } from 'react';
import './RotatingCarousel.css';
import questionImage from '../images/question-mark.png';
import call from '../images/call.png';

const profiles = [
  { id: 1, package: '12 LPA', company: 'HCL', image: '/download.jpeg', alt: 'Image 1' },
  { id: 2, package: '12 LPA', company: 'Infosys', image: '/image1.jpeg', alt: 'Image 2' },
  { id: 3, package: '12 LPA', company: 'HCL', image: '/image2.jpeg', alt: 'Image 3' },
  { id: 4, package: '12 LPA', company: 'Infosys', image: '/image3.jpeg', alt: 'Image 4' },
  { id: 5, package: '12 LPA', company: 'HCL', image: '/image4.jpeg', alt: 'Image 5' },
  { id: 6, package: '12 LPA', company: 'Infosys', image: '/image5.jpeg', alt: 'Image 6' },
  { id: 7, package: '12 LPA', company: 'HCL', image: '/image6.jpeg', alt: 'Image 7' },
  { id: 8, package: '12 LPA', company: 'Infosys', image: '/image7.jpeg', alt: 'Image 8' },
  { id: 9, package: '12 LPA', company: 'HCL', image: '/image8.jpeg', alt: 'Image 9' },
];

const RotatingCarousel = () => {
  const [angle, setAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Function to calculate translation distance based on screen width
  const getTranslationDistance = () => {
    if (window.innerWidth < 576) return 150; // Mobile
    if (window.innerWidth < 768) return 200;  // Tablets
    if (window.innerWidth > 1380) return 300;
    return 200; // Desktops
  };
  const [translationDistance, setTranslationDistance] = useState(getTranslationDistance());

  // Update translation distance on window resize
  useEffect(() => {
    const handleResize = () => setTranslationDistance(getTranslationDistance());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => {
        setAngle((prev) => prev + 30);
        setActiveIndex((prev) => (prev + 1) % profiles.length);
      }, 800);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isHovered]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalId); // Stop rotation on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Restart rotation after hover
  };

  return (
    <div className='main-container'>
      <div className="carousel-container">
        <div className='spiral'></div>
        <div className="carousel">
          {profiles.map((profile, index) => {
            const rotation = angle + (index * (360 / profiles.length));
            return (
              <div
                key={profile.id}
                className={`profile ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotate(${rotation}deg) translate(${translationDistance}px) rotate(-${rotation}deg)`,
                  transition: 'transform 0.5s ease',
                }}
              >
                <span className='name'>
                  <span className='package'>{profile.package}</span> <br />
                  {profile.company}
                </span>
                <div className="highlight-circle">
                  <img src={profile.image} alt={profile.alt} className='rotate-img' />
                </div>
              </div>
            );
          })}
        </div>
        <div className="center-profile">
          <div className="highlight-circle">
            <img src={profiles[activeIndex].image} alt={profiles[activeIndex].alt} />
          </div>
          <span className='name'>
            <span className='package'>{profiles[activeIndex].package}</span> {profiles[activeIndex].company}
          </span>
        </div>
      </div>
      <div className="right-section-container">
        <div className='right-section'>
          <div className="text-content">
            <p>
              After <span className="highlight">3281+</span> <br /> Successful Placed <br /> Students
            </p>
            <h1>WHO IS <br /> NEXT.....?</h1>
          </div>
          <div className="callback-section">
            <button className="callback-button-rotating">
              <img src={call} alt="call" className='call' /> Request A Callback
            </button>
          </div>
        </div>
        <img src={questionImage} alt="Question Mark" className="question-mark" />
      </div>
    </div>
  );
};

export default RotatingCarousel;
