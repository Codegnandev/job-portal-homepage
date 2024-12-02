import React, { useState, useEffect } from 'react';
import './Home.css';
import { AppBar } from "@mui/material";
import InfoBanner from './InfoBanner';
import TeamPage from './TeamPage';
import RotatingCarousel from './RotatingCarousel';
import TestimonialsV from './TestimonialsV';
import CourseQuerySection from './CourseQuerySection';
import Collaboration from './Collaboration';
import BannerPage from './BannerPage';


export default function Home() {
  const [showAppBar, setShowAppBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Hide AppBar on scroll down
        setShowAppBar(false);
      } else {
        // Show AppBar on scroll up
        setShowAppBar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="https://codegnan.com/job-accelerator-program/" target="accelerate-program" className='anchor-app-bar'>
        
          <AppBar 
            sx={{  backgroundColor: '#132EE0', transition: 'top 0.3s',textDecoration: 'none',boxShadow: 'none',border: 'none'}} 
            className='scroll-container'
            position='static'
          >
            <p className='home-scroll-text' >
              <span className='home-new'>New</span>  
                 "Codegnan's Job Accelerator Program (JAP) offers a 
              <span className='home-100-days'> 100-days</span> intensive training"
              <span className='home-arrow'>&rarr;</span>
            </p>
          </AppBar>
        
      </a>
     <BannerPage/>
      <InfoBanner />
      <TestimonialsV />
      <RotatingCarousel />
      <CourseQuerySection/>
      <Collaboration/>
      <TeamPage/>
     
    </>
  );
}
