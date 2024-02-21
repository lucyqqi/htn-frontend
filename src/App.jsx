import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Feedbacks, Hero, Navbar} from './components';
import Login from './components/Login'; 
import { LoginProvider } from './LoginContext'; 
import ScrollToTop from "react-scroll-to-top";
// just the routing of everything you see :)

const App = () => {
  
  return (
    
    <LoginProvider>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar /> {/* navbar displayed on all pages */}
        <Routes> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Feedbacks />
              <div className='relative z-0'>
    
              </div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
    <ScrollToTop smooth />
    </LoginProvider>
    
    
    
  );

}


export default App;
