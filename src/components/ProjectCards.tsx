import React from 'react';

import projectCards from '../../data/projectCards';

const ProjectCards = () => {
  return (
    <div className="cardContainer">
      {projectCards &&
        projectCards.map((card, index) => (
          <div className="cardContainer__card1" key={index}>
            <div className="cardContainer__card1__desc">
              <p>Project:</p>
              <img src={card.project} alt="logo-2" />

              <p>Team Members:</p>
              <div className="cardContainer__card1__desc__teamMembers">
                {card.employees &&
                  card.employees.map((employee, index) => (
                    <div
                      className="cardContainer__card1__desc__teamMembers__employees"
                      key={index}>
                      <img src={employee.src} alt="teamMember" />
                      <p>{employee.name}</p>
                      <p>{employee.jobTitle}</p>
                    </div>
                  ))}
              </div>
              <p>Project Progress:</p>
            </div>
            <div className="cardContainer__card1__circle">
              <img src={card.progress} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCards;
