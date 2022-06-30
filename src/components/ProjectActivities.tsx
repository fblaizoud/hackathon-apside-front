import React, { useState } from 'react';

import projectActivities from '../../data/projectActivities';

const ProjectActivities = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="projectActivities">
      <h1>Project Activities</h1>
      {projectActivities.map(
        (projectActivity, index) =>
          ((!seeMore && index < 5) || seeMore) && (
            <div className="projectActivities__card" key={index}>
              <div className="projectActivities__card__imgBox">
                <img src={projectActivity.src} alt={projectActivity.employee} />
              </div>
              <div className="projectActivities__card__activity">
                <span className="projectActivities__card__activity__employee">
                  {projectActivity.employee}
                </span>
                <p className="projectActivities__card__activity__description">
                  {projectActivity.description}
                </p>
                <span className="projectActivities__card__activity__postTime">
                  {projectActivity.postTime}
                </span>
              </div>
              <div className="projectActivities__card__button">
                <svg
                  width="13"
                  height="20"
                  viewBox="0 0 13 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.66069 17.375L10.2321 10.3036L2.66069 3.23215"
                    stroke="#EEEEEE"
                    strokeWidth="4.97842"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ),
      )}
      <button className="projectActivities__button" onClick={() => setSeeMore(!seeMore)}>
        {!seeMore ? 'See More' : 'See less'}
      </button>
    </div>
  );
};

export default ProjectActivities;
