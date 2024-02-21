import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLogin } from '../LoginContext.jsx';

// defines the navigation bar at the top of the page
const Navbar = () => {
  const { isLoggedIn, logout } = useLogin();
  const navigate = useNavigate();
  const [active, setActive] = useState(""); // tracks the active link
  const [toggle, setToggle] = useState(false); // manages mobile menu toggle state
  const [scrolled, setScrolled] = useState(false); // tracks if the page has been scrolled

  // effect to handle the navbar's appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // navbar becomes solid after scrolling 100px
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handles user logout
  const handleLogoutClick = () => {
    logout();
    navigate('/'); // optionally navigate to a different page after logout
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => setActive("")}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.title} className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
              {/* ensure the link doesn't render for login/logout to manage it separately */}
              {nav.title !== "Log In" && <Link to={nav.path}>{nav.title}</Link>}
            </li>
          ))}
          {/* manage the Log In/Log Out button based on login state */}
          <li className="text-white text-[18px] font-medium cursor-pointer">
            {isLoggedIn ? (
              <div onClick={handleLogoutClick}>Log Out</div> // using div or button depending on style needs
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
