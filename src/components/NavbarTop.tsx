import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarTop = ({ isLogged }) => {
  return (
    <div className="navbarTopContainer">
      <div className="navbarTopContainer">
        <img className="navbarTopContainer__logo" src="/assets/logo.png" alt="hubLogo" />
        <div className="navbarTopContainer__navbarContainer">
          <div className="navbarTopContainer__navbarContainer__leftSide">
            <ul>
              <li>Dashboard</li>
              <NavLink className="inactive" to="/messaging">
                <li>Messages</li>
              </NavLink>
              <li>Help</li>
            </ul>
          </div>
          <div
            className={
              isLogged
                ? 'navbarTopContainer__navbarContainer__rightSide'
                : 'navbarTopContainer__navbarContainer__rightSide__hidden'
            }>
            <img
              className="navbarTopContainer__navbarContainer__rightSide__alert"
              src="/assets/alert.png"
              alt="alert"
            />
            <img
              className="navbarTopContainer__navbarContainer__rightSide__userPicture"
              src="/assets/PhotoProfile.png"
              alt="PhotoProfile"
            />
            <p className="navbarTopContainer__navbarContainer__rightSide__userName">
              Maria Sanchez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
