import React from 'react';
import './TeamPage.css'; 
import FacebookIcon from '../images/facebook.png'; 
import LinkedinIcon from '../images/linkedin.png';
import WhatsappIcon from '../images/whatsapp.png';
import SairamImage from '../images/sairam.png'; 
import SakethImage from '../images/saketh.png';
import tickMark from '../images/tick-mark.png'
import mark from '../images/mark.png'

const TeamPage = () => {
  return (
    <div className="team-page">
      <header className="header">
        <h1 className='team-heading'>
          <img src={mark} alt='mark' className='mark'/>
           Meet Our Team Behind Codegnan</h1> 
        <button className="all-team-btn"><span className='btn-span'>All Team Members &gt;&gt;</span></button>
      </header>
      <div className='section-container'>
      <section className="team-members">
        <div className="team-card sairam">
          <img src={SairamImage} alt="Uppugundla Sairam" className="profile-pic" />
          <h2 className='sairam'>Uppugundla Sairam</h2>
          <p>Founder & Chief Executive Officer</p>
          <div className="social-icons-team">
            <a href="#facebook" target="_blank" rel="noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#linkedin" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#whatsapp" target="_blank" rel="noreferrer">
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div className="team-card saketh">
          <img src={SakethImage} alt="Kallepu Saketh Reddy" className="profile-pic" />
          <h2 className='saketh-head'>Kallepu Saketh Reddy</h2>
          <p>Co-Founder and Chief Management Officer</p>
          <div className="social-icons-team">
            <a href="#facebook" target="_blank" rel="noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#linkedin" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#whatsapp" target="_blank" rel="noreferrer">
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </section>
      <section className="description">
        <h2>Our Top Notch Teams</h2>
        <h3>You Learn Programming<span>,<br/>Not Just Coding.</span></h3>
        <ul>
          <li>
          <img src={tickMark} alt="tickMark" className='tick-mark'/>
            Embark on a Journey with Elite Mentors - IIT Alumni and Top MNC Experts.</li>
          <li>
          <img src={tickMark} alt="tickMark" className='tick-mark'/>
            Experience Doubt-Free Learning from Product Developers.</li>
          <li>
          <img src={tickMark} alt="tickMark" className='tick-mark'/>
            Elevate Your Skills with Expert Masterclasses.</li>
        </ul>
      </section>
      </div>
    </div>
  );
};

export default TeamPage;
