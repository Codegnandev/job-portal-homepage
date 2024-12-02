import React from "react";
import CopyrightSection from "../Home/CopyrightSection";
import "./Footer.css";


// Importing assets
import codegnanLogo from '../images/codegnan-white.png';
import facebook from '../images/facebook-white.png';
import linkedin from '../images/linkedin-white.png';
import twitter from '../images/twitter.png';
import whatsapp from '../images/whatsapp-white.png';
import youtube from '../images/youtube-white.png';
import instagram from '../images/insta-white.png';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img
              src={codegnanLogo}
              alt="Codegnan Logo"
              className="footer-logo"
            />
          </div>
          <p className="footer-text">
            With over two decades, we are bringing international teaching
            standards to the tech aspirants globally. Nurture your inner coder
            with us and take charge of your coding career with the top trending
            and high-paying technologies. This is the right time to enlighten
            your code “GNAN”.
          </p>
          <div className="social-icons-footer">
            <a href="https://www.facebook.com/codegnan" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/codegnan/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@Codegnan" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="https://in.linkedin.com/company/codegnan" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://wa.me/message/V6KW6C7XJG6FK1" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FCodegnandotcom" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Internships</a>
            </li>
            <li>
              <a href="#">Placements</a>
            </li>
            <li>
              <a href="#">Become a mentor</a>
            </li>
            <li>
              <a href="#">Job acceleration program</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="branches">
            <h4>OUR BRANCHES</h4>
            <p>
              <strong>Vijayawada</strong>
              <br />
              40-5-19/16, Prasad Naidu Complex, P.B. Siddhartha Busstop,
              Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010.
            </p>
            <p>
              <strong>Hyderabad</strong>
              <br />
              Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH
              Metro Station, Nizampet X Roads, Hyderabad, 500072.
            </p>
          </div>
          
        </div>
        <div className="footer-end">
        <div className="courses">
            <h4>OUR COURSES</h4>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>Data science</li>
              <li>Machine learning</li>
              <li>React JS</li>
              <li>Data structures</li>
              <li>C programming</li>
              <li>Software Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <CopyrightSection/>
    </>
  );
};

export default Footer;
