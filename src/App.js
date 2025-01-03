import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import StudentSignup from './Signup/StudentSignup';
// import CompanySignup from './Signup/CompanySignup';
// import NotFound from './NotFound';
import NavigationV from './Navigation/NavigationV';
import Home from './Home/Home';
// import Signup from './Signup/Signup';
// // import Login from './Login/Login';
// import StudentLogin from './Login/StudentLogin';
// // import CompanyLogin from './Login/CompanyLogin';
 import Footer from './Footer/Footer';
// import BDELogin from './BDE/BDELogin';
// import BDESignup from './BDE/BDESignup';
// import AddJob from './AddJob/AddJob';
// import BDEDashboard from './BDEDashboard/BDEDashboard';
// import JobsList from './JobsList/JobsList';
// import StudentsApplied from './StudentsApplied/StudentsApplied';
// import BDEStudentsAppliedJobsList from './BDEStudentsAppliedJobsList/BDEStudentsAppliedJobsList';
// import StudentsList from './StudentsList/StudentsList';
// import StudentProfile from './StudentProfile/StudentProfile';
// import EmailApplyJob from './EmailApplyJob/EmailApplyJob';
// import AdminLogin from './Login/AdminLogin';
// import ForgotPassword from './ForgotPassword/ForgotPassword';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userType = localStorage.getItem('userType');

  if (!userType) {
    return <Navigate to="/not-found" replace />;
  }

  if (!allowedRoles.includes(userType)) {
    return <Navigate to="/not-found" replace />;
  }

  return children;
};

export default function App() {
  return (
    <div>
      <NavigationV />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      <Footer />
    </div>
    </div>
  );
}



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import StudentSignup from './Signup/StudentSignup';
// import CompanySignup from './Signup/CompanySignup';
// import NotFound from './NotFound';
// import Navigation from './Navigation/Navigation';
// import Home from './Home/Home';
// import Signup from './Signup/Signup';
// import Login from './Login/Login';
// import StudentLogin from './Login/StudentLogin'
// import CompanyLogin from './Login/CompanyLogin';
// import Footer from './Footer/Footer';
// import BDELogin from './BDE/BDELogin'
// import BDESignup from './BDE/BDESignup'
// import AddJob from './AddJob/AddJob';
// import BDEDashboard from './BDEDashboard/BDEDashboard';
// import JobsList from './JobsList/JobsList';
// import StudentsApplied from './StudentsApplied/StudentsApplied';
// import BDEStudentsAppliedJobsList from './BDEStudentsAppliedJobsList/BDEStudentsAppliedJobsList'
// import StudentsList from './StudentsList/StudentsList'
// import StudentProfile from './StudentProfile/StudentProfile';
// import EmailApplyJob from './EmailApplyJob/EmailApplyJob'
// import AdminLogin from './Login/AdminLogin';
// // import ApplyJob from './ApplyJob/ApplyJob'

// export default function App() {
//   return (
//     <div>
//       <Navigation />
//       <div style={{ paddingTop: "64px",marginBottom:"10px" }}>
//         {/* 64px is the height of the Navigation */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />}>
//             <Route path="student" element={<StudentSignup />} />
//             <Route path="company" element={<CompanySignup />} />
//           </Route>
//           <Route path="/login" element={<Login />}>
//             <Route path="student" element={<StudentLogin />} />
//             <Route path="company" element={<CompanyLogin />} />
//           </Route>
//           <Route path="/bdelogin" element={<BDELogin />} />
//           <Route path="/bdesignup" element={<BDESignup />} />
//           <Route path="/addjob" element={<AddJob />} />
//           <Route path="/bdedashboard" element={<BDEDashboard/>}/>
//           <Route path="/jobslist" element={<JobsList/>}/>
//           <Route path="/studentsapplied" element={<StudentsApplied/>}/>
//           <Route path="/bdestudentsappliedjoblist/:jobId" element={<BDEStudentsAppliedJobsList/>}/>
//           {/* <Route path="/applyjob" element={<ApplyJob/>}/> */}
//           <Route path="/student-profile" element={<StudentProfile/>}/>
//           <Route path="/studentslist" element={<StudentsList/>}/>
//           <Route path="/adminlogin" element={<AdminLogin/>}/>
//           <Route path="/directapply/:student_id/:job_id" element={<EmailApplyJob/>}/>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }