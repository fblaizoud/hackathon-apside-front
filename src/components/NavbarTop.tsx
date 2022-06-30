import React from 'react';

const NavbarTop = () => {
  return (
    <div className="navbarTopContainer">
      <div className="navbarTopContainer">
        <img className="navbarTopContainer__logo" src="/assets/logo.png" alt="hubLogo" />
        <div className="navbarTopContainer__navbarContainer">
          <div className="navbarTopContainer__navbarContainer__leftSide">
            <ul>
              <li>Dashboard</li>
              <li>Messages</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="navbarTopContainer__navbarContainer__rightSide">
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
