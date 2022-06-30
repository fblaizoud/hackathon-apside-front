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
        {/* <div className="recentProjects__container__card">
          <li>AUTODESK</li>
          <li>25 May 2020</li>
          <li>Los</li>
          <li>10 July 2020</li>
          <li>In Process</li>
        </div>
        <div className="recentProjects__container__card">
          <li>TARGET</li>
          <li>10 April 2020</li>
          <li>Dogos</li>
          <li>30 Septembre 2020</li>
          <li>In Process</li>
        </div>
        <div className="recentProjects__container__card">
          <li>REMIX</li>
          <li>17 May 2020</li>
          <li>Hermanos</li>
          <li>25 December 2020</li>
          <li>Open</li>
        </div> */}
        {toto.map((project) => (
          <ul className="recentProjects__container__card">
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
