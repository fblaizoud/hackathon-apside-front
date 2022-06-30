import React from 'react';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarContainer__top">
        <img
          className="navbarContainer__top__logo"
          src="/assets/logo.png"
          alt="hubLogo"
        />
        <div className="navbarContainer__top__navbarContainer">
          <div className="navbarContainer__top__navbarContainer__leftSide">
            <ul>
              <li>Dashboard</li>
              <li>Messages</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="navbarContainer__top__navbarContainer__rightSide">
            <img
              className="navbarContainer__top__navbarContainer__rightSide__alert"
              src="/assets/alert.png"
              alt="alert"
            />
            <img
              className="navbarContainer__top__navbarContainer__rightSide__userPicture"
              src="/assets/PhotoProfile.png"
              alt="PhotoProfile"
            />
            <p className="navbarContainer__top__navbarContainer__rightSide__userName">
              Pedro Maria Jesus
            </p>
          </div>
        </div>
      </div>
      <div className="navbarContainer__left">
        <div className="navbarContainer__left__icons">
          <img src="/assets/icon1.png" alt="icon1" />
          <img src="/assets/icon2.png" alt="icon2" />
          <img src="/assets/icon3.png" alt="icon3" />
          <img src="/assets/icon4.png" alt="icon4" />
          <img src="/assets/icon5.png" alt="icon5" />
          <img src="/assets/icon6.png" alt="icon6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
