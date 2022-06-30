import React, { useState } from 'react';

import projectActivities from '../../data/projectActivities';

const EmployeesPage = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="employeesPage">
      <h1>Status of employers</h1>
      <div className="employeesPage__list">
        {projectActivities.map(
          (projectActivity, index) =>
            ((!seeMore && index < 5) || seeMore) && (
              <div className="employeesPage__list__card" key={index}>
                <div className="employeesPage__list__card__imgBox">
                  <img src={projectActivity.src} alt={projectActivity.employee} />
                </div>
                <div className="employeesPage__list__card__activity">
                  <span className="employeesPage__list__card__activity__employee">
                    {projectActivity.employee}
                  </span>
                  <p className="employeesPage__list__card__activity__description">
                    {projectActivity.description}
                  </p>
                  <span className="employeesPage__list__card__activity__postTime">
                    {projectActivity.postTime}
                  </span>
                </div>
                <div className="employeesPage__list__card__button">
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
      </div>
      <button className="employeesPage__button" onClick={() => setSeeMore(!seeMore)}>
        {!seeMore ? 'See More' : 'See less'}
      </button>
    </div>
  );
};

export default EmployeesPage;
