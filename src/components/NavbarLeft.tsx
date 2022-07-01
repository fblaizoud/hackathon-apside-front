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
        <NavLink className="inactive" to="/employees">
        <img src="/assets/icon3.png" alt="icon3" />
        </NavLink>
        <img src="/assets/icon4.png" alt="icon4" />
        <img src="/assets/icon5.png" alt="icon5" />
      </div>
    </div>
  );
};

export default NavbarLeft;
