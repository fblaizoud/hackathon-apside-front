import React, { useState } from 'react';

import projectActivities from '../../data/projectActivities';

const EmployeesPage = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="employeesPage">
      <div className="employeesPage__content">
        <h1 className="employeesPage__content__title">Employees</h1>
        <select name="filter" id="filter">
          <option value="">All</option>
        </select>
        <div className="employeesPage__content__list">
          {projectActivities.map((employee, index)=> <div className={`employeesPage__content__list__card-${index}`} key={index}>
            <div className='imgBox'><img src={employee.src} alt={employee.employee} /></div>
            <span className='name'>{employee.employee}</span>
            <span className='job'>{`Job : ${employee.jobTitle}`}</span>
            <span className='status'>{`Status : ${employee.isOccuped ? 'Occuped' : 'Free'}`}</span>
            <div className='skills'>
              <span>Skills :</span>
              <ul>
                {employee.skills.map((skill)=> <li>{skill}</li>)}
              </ul>
            </div>
          </div>)
}
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
