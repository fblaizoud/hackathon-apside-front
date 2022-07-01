import React, { useState } from 'react';

import projectActivities from '../../data/projectActivities';

const EmployeesPage = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="employeesPage">
      <div className="employeesPage__content">
        <h1 className="employeesPage__content__title">Employees</h1>
        <div className="employeesPage__content__list">
          {projectActivities.map((employee, index)=> <div className={`employeesPage__content__list__card-${index}`} key={index}>
            <img src={employee.src} alt={employee.employee} />
            <span>{employee.employee}</span>
            <span>S</span>
          </div>)
}
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
