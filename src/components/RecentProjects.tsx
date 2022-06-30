import React from 'react';

import toto from '../../data/recentProjects';

const RecentProjects = () => {
  return (
    <>
      <div className="recentProjects">
        <div className="recentProjects__container">
          <ul className="recentProjects__container__title">
            <li className="recentProjects__container__title__logo--project">
              Recent Projects
            </li>
            <li className="recentProjects__container__title__text">Created</li>
            <li className="recentProjects__container__title__text">Team Leader</li>
            <li className="recentProjects__container__title__text">Due</li>
            <li className="recentProjects__container__title__text">Stats</li>
          </ul>
        </div>

        {toto.map((project) => (
          <ul className="recentProjects__container__card" key={project.id}>
            <img
              className="recentProjects__container__title__logo"
              src={project.logo}
              alt="logo"
            />
            <li className="recentProjects__container__title__text">{project.created}</li>
            <li className="recentProjects__container__title__text">
              {project.teamleader}
            </li>
            <li className="recentProjects__container__title__text">{project.due}</li>
            <li className="recentProjects__container__title__text">{project.stats}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default RecentProjects;
