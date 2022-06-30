<<<<<<< HEAD
import React from 'react';

const Home = () => {
  return (
    <div className="homeContainer">
      <p>hello</p>
    </div>
  );
=======
import React, { useContext } from 'react';
import ProjectActivities from './ProjectActivities'

const Home = () => {
  return <div className="homeContainer">
    <ProjectActivities />
  </div>;
>>>>>>> 3c52cdd919666eeb71c3df6234eec0785db35cd4
};

export default Home;
