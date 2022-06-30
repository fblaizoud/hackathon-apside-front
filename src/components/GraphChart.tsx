import React from 'react';
import { Chart } from 'react-google-charts';

const options = {
  title: 'Age vs. Weight comparison',
  hAxis: { title: 'Age', viewWindow: { min: 0, max: 15 } },
  vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
  legend: 'none',
};

const data = [
  ['Age', 'Weight'],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [5, 10],
  [3, 8],
  [4, 9],
  [6.5, 7],
  [15, 7],
  [6.5, 15],
];

const GraphChart = () => {
  return (
    <div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default GraphChart;
