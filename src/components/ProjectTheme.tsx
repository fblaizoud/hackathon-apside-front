import React from 'react';

const ProjectTheme = () => {
  return (
    <div className="projectThemeContainer">
      <div className="projectThemeContainer__projectThemeInput">
        <input
          className="projectThemeContainer__projectThemeInput__input"
          type="text"
          name="Search"
        />
        <input
          className="projectThemeContainer__projectThemeInput__input"
          type="text"
          name="Filter"
        />
      </div>
      <div className="projectThemeContainer__projectThemeCards">
        <div className="projectThemeContainer__projectThemeCards__projectThemeCardInfo">
          <img src="/assets/Group_1716.png" alt="cards" />
        </div>
        <div className="projectThemeContainer__projectThemeCards__projectThemeCardOtherContainer">
          <div className="projectThemeContainer__projectThemeCards__projectThemeCardOtherContainer__card">
            <img src="/assets/Group_1715.png" alt="card" />
            <img src="/assets/Group_1715.png" alt="card" />
          </div>
          <div className="projectThemeContainer__projectThemeCards__projectThemeCardOtherContainer__card">
            <img src="/assets/Group_1715.png" alt="card" />
            <img src="/assets/Group_1715.png" alt="card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTheme;
