import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className="navbarLeftContainer">
      <div className="navbarLeftContainer__icons">
        <NavLink className="inactive" to="/">
          <img src="/assets/icon1.png" alt="icon1" />
        </NavLink>
        <NavLink className="inactive" to="/projectTheme">
          <img src="/assets/icon2.png" alt="icon2" />
        </NavLink>
        <img src="/assets/icon3.png" alt="icon3" />
        <img src="/assets/icon4.png" alt="icon4" />
        <NavLink className="inactive" to="/login">
          <img src="/assets/icon5.png" alt="icon5" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarLeft;
