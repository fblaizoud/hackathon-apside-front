import 'react-circular-progressbar/dist/styles.css';

import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const percentage = 75;
const GraphCircle = () => {
  return (
    <div className="completionChart">
      <div className="completionChart__graph">
        <CircularProgressbar
          className="completionChart__graph__circular"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#hardBlueDarkcolor',
            pathColor: '#blueLightColor',
            trailColor: '#bluePrimaryColor',
          })}
        />
      </div>
    </div>
  );
};

export default GraphCircle;
