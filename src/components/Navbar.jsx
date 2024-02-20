import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLogin } from '../LoginContext.jsx';

const Navbar = () => {
  const { isLoggedIn, logout } = useLogin();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoutClick = () => {
    logout();
    navigate('/'); // Optionally navigate to a different page after logout
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
              {/* Ensure the link doesn't render for login/logout to manage it separately */}
              {nav.title !== "Log In" && <Link to={nav.path}>{nav.title}</Link>}
            </li>
          ))}
          {/* Here we manage the Log In/Log Out button */}
          <li className="text-white text-[18px] font-medium cursor-pointer">
            {isLoggedIn ? (
              <div onClick={handleLogoutClick}>Log Out</div> // Using div or button depending on your style needs
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
        </ul>

        {/* Your existing code for the mobile menu and other navigation elements */}
      </div>
    </nav>
  );
};

export default Navbar;
