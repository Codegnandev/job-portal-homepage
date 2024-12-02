import React, { useEffect, useRef } from 'react';

import GEC from '../images/GEC.png';
import KBN from '../images/KBN.png';
import KIT from '../images/KIT.png';
import LBC from '../images/LBC.png';
import NEC from '../images/NEC.png';
import SECV from '../images/SECV.png';
import VIJAYAWADA from '../images/VIJAYAWADA.png';

import './Collaboration.css';

const Collaboration = () => {
  const carouselRef = useRef(null);

  const collaborationList = [
    { id: 1, image: GEC, alt: 'GEC' },
    { id: 2, image: KBN, alt: 'KBN' },
    { id: 3, image: KIT, alt: 'KIT' },
    { id: 4, image: LBC, alt: 'LBC' },
    { id: 5, image: NEC, alt: 'NEC' },
    { id: 6, image: SECV, alt: 'SEC' },
    { id: 7, image: VIJAYAWADA, alt: 'Vijayawada' },
      { id: 1, image: GEC, alt: 'GEC' },
    { id: 2, image: KBN, alt: 'KBN' },
    { id: 3, image: KIT, alt: 'KIT' },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: -150, 
          behavior: 'smooth',
        });

        if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollTo({
            left: carouselRef.current.scrollWidth, 
            behavior: 'smooth',
          });
        }
      }
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="collaboration-container">
      <h1 className="collaboration-title">Our Collaboration</h1>
      <div className="collaboration-carousel" ref={carouselRef}>
        {collaborationList.map((eachItem) => (
          <div key={eachItem.id} className="collaboration-item">
            <img src={eachItem.image} alt={eachItem.alt} className="collaboration-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;
