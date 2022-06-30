import 'react-circular-progressbar/dist/styles.css';

import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const percentage = 38;
const GraphCircle = () => {
  return (
    <div className="completionChart">
      <div className="completionChart__graph">
        <CircularProgressbar
          className="completionChart__graph__circular"
          value={percentage}
          text={`${percentage + 37}%`}
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
