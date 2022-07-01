import React from 'react';

const ProjectTheme = () => {
  return (
    <div className="projectThemeContainer">
      <div className="projectThemeContainer__input">
        <input
          className="projectThemeContainer__input--button"
          type="text"
          name="Search"
          value="Search"
        />
        <input
          className="projectThemeContainer__input--button"
          type="text"
          name="Filter"
          value="Filtre"
        />
      </div>
      <div className="projectThemeContainer__cards">
        <div className="projectThemeContainer__cards__left">
          <img
            className="projectThemeContainer__cards__left--1"
            src="/assets/Group_1716.png"
            alt="cards"
          />
        </div>
        <div className="projectThemeContainer__cards__right">
          <div className="projectThemeContainer__cards__right__up">
            <img
              className="projectThemeContainer__cards__right__up--img"
              src="/assets/Group_1715.png"
              alt="card"
            />
            <img
              className="projectThemeContainer__cards__right__up--img"
              src="/assets/Group_1715.png"
              alt="card"
            />
          </div>
          <div className="projectThemeContainer__cards__right__down">
            <img
              className="projectThemeContainer__cards__right__down--img"
              src="/assets/Group_1715.png"
              alt="card"
            />
            <img
              className="projectThemeContainer__cards__right__down--img"
              src="/assets/Group_1715.png"
              alt="card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTheme;
