import React, { useState } from 'react';
import { AppBar, Toolbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import './NavigationV.css';
// import logo from '../images/Codegnan Logo.png'
import codegnanLogo from '../images/codegnan-logo.png'

const NavigationV = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const userType = localStorage.getItem("userType");

  const handleClick = (location) => {
    navigate(location);
    setShowNavLinks(false);
    setShowBlur(false);
  };

  const handleToggle = () => {
    setShowNavLinks(!showNavLinks);
    setShowBlur(!showBlur);
  };

  const handleClose = () => {
    setShowNavLinks(false);
    setShowBlur(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('student_id');
    navigate("/");
  };

  // Check if the current path is /directapply
  const isDirectApply = location.pathname.includes('/directapply');

  return (
    <div className={`navigation-container ${showBlur ? 'blur' : ''}`}>
      <AppBar position="static" className="navbar" elevation={0} sx={{height:60,flexGrow:1}}>
        <Toolbar className="tool">
          <img
            src={codegnanLogo}
            alt="Codegnan Logo"
            className="logo"
             width="150" height="150"
            onClick={() => handleClick("/")}
          />
          {!isDirectApply && (
            <div className={`nav-links ${showNavLinks ? 'show' : ''}`}>
              {userType ? (
                userType === "student" ? (
                  <>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/jobslist")}>
                      Jobs List
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/student-profile")}>
                      Profile
                    </button>
                    <button color="inherit" id="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : userType === "company" ? (
                  <>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                      Add Jobs
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/myjobs")}>
                      My Jobs
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/profile")}>
                      Profile
                    </button>
                    <button color="inherit" id="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : userType === "bde" ? (
                  <>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                      Add Job
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/studentslist")}>
                      Students List
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/bdedashboard")}>
                      Dashboard
                    </button>
                    <button color="inherit" id="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ): userType === "admin" ? (
                  <>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                      Add Job
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/bdedashboard")}>
                      {/*jobs list = bdedashboard */}
                     Jobs List
                    </button>
                    <button color="inherit" id="nav-link" onClick={() => handleClick("/studentslist")}>
                      Students List
                    </button>
                    <button color="inherit" id="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                   <button color="inherit" id="nav-link" onClick={() => handleClick("/signup/student")}>
                      Signup
                    </button>
                    <button color="inherit" id="nav-link-login" onClick={() => handleClick("/login/student")}>
                      Login
                    </button>
                   
                  </>
                )
              ) : (
                <>
                 <button color="inherit"   id="nav-link" onClick={() => handleClick("/signup")}>
                    Signup
                  </button>
                  <button color="inherit"   id="nav-link-login" onClick={() => handleClick("/login")}>
                    Login
                  </button>
                 
                </>
              )}
              <span className="close-btn" onClick={handleClose}>X</span>
            </div>
          )}
          {!isDirectApply && (
            <button className={`toggler ${showNavLinks ? 'show' : ''}`} onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </Toolbar>
      </AppBar>
      {showBlur && !isDirectApply && <div className={`blur-bg ${showBlur ? 'show' : ''}`} onClick={handleClose}></div>}
    </div>
  );
};

export default NavigationV;
