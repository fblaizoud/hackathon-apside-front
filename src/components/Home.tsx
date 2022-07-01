import React from 'react';
import GraphChart from './GraphChart';
import ProjectActivities from './ProjectActivities';
import ProjectCards from './ProjectCards';
import RecentProjects from './RecentProjects';
import TodaySchedule from './TodaySchedule';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainer__left">
        <div className="homeContainer__left__projectCard">
          <ProjectCards />
        </div>
        <div className="homeContainer__left__recentProject">
          <RecentProjects />
        </div>
        <div className="homeContainer__left__projectOverview">
          <GraphChart />
        </div>
      </div>
      <div className="homeContainer__right">
        <div className="homeContainer__right__projectActivities">
          <ProjectActivities />
        </div>
        <div className="homeContainer__right__todaySchedule">
          <TodaySchedule />
        </div>
      </div>
    </div>
  );
};

export default Home;
