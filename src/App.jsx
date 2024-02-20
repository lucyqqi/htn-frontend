import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Feedbacks, Hero, Navbar, StarsCanvas } from './components';
import Login from './components/Login'; // Make sure this path is correct
import { LoginProvider } from './LoginContext'; // Import the provider
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  
  return (
    
    <LoginProvider>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar /> {/* Navbar is displayed on all pages */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} /> {/* Use element prop */}
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Feedbacks />
              <div className='relative z-0'>
                <StarsCanvas />
              </div>
            </>
          } />
          {/* Define additional routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
    <ScrollToTop smooth />
    </LoginProvider>
    
    
    
  );

}


export default App;
