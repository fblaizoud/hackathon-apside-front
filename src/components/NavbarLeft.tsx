import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className="navbarLeftContainer">
      <div className="navbarLeftContainer__icons">
        <NavLink className="inactive" to="/">
          <img src="/assets/icon1.png" alt="icon1" />
        </NavLink>
        <img src="/assets/icon2.png" alt="icon2" />
        <img src="/assets/icon3.png" alt="icon3" />
        <img src="/assets/icon4.png" alt="icon4" />
        <img src="/assets/icon5.png" alt="icon5" />
        <img src="/assets/icon6.png" alt="icon6" />
      </div>
    </div>
  );
};

export default NavbarLeft;
