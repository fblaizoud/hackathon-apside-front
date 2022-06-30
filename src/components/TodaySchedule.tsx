import React from 'react';

import todaysArray from '../../data/todayScheduleArray';

const TodaySchedule = () => {
  return (
    <div className="todaySchedule">
      <h1 className="todaySchedule__title">Today&apos;s Schedule</h1>
      {todaysArray.map((today) => (
        <div className="todaySchedule__infos" key="index">
          <img className="todaySchedule__infos__img" src={today.link} alt={today.team} />
          <div className="todaySchedule__infos__container">
            <span className="todaySchedule__infos__container--date">{today.date}</span>
            <span className="todaySchedule__infos__container--team">{today.team}</span>
            <span className="todaySchedule__infos__container--place">{today.place}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodaySchedule;
