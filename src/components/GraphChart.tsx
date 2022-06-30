import React from 'react';
import { Chart } from 'react-google-charts';
//
//
//
//
//options for graphs

const optionsLine = {
  legend: {
    textStyle: { color: 'white' },
    position: 'bottom',
  },
  title: 'Company Performance',
  titleTextStyle: { color: '#FFF' },
  curveType: 'function',
  backgroundColor: '#2c2f33',
  hAxis: {
    textStyle: { color: '#FFF' },
  },
  vAxis: {
    textStyle: { color: '#FFF' },
  },
};
const optionsPie = {
  legend: {
    textStyle: { color: 'white' },
    position: 'bottom',
  },
  title: 'My Daily Activities',
  titleTextStyle: { color: '#FFF' },
  backgroundColor: '#2c2f33',
  hAxis: {
    textStyle: { color: '#FFF' },
  },
  vAxis: {
    textStyle: { color: '#FFF' },
  },
};

const optionsAll = {
  legend: {
    textStyle: { color: '#FFF' },
    position: 'bottom',
  },
  title: 'Monthly delivery by country',
  seriesType: 'bars',
  series: { 5: { type: 'line' } },
  titleTextStyle: { color: '#FFF' },
  backgroundColor: '#2c2f33',
  hAxis: {
    textStyle: { color: '#FFF' },
  },
  vAxis: {
    textStyle: { color: '#FFF' },
  },
};
//
//
//
//
//datasets for charts //
const dataLine = [
  ['Year', 'Sales', 'Expenses'],
  ['2004', 1000, 400],
  ['2005', 1170, 460],
  ['2006', 660, 1120],
  ['2007', 1030, 540],
];
const dataPie = [
  ['Task', 'Hours per Day'],
  ['Dev', 11],
  ['Marketing', 2],
  ['Sales', 2],
  ['Management', 2],
  ['Netflix', 7],
];

const dataAll = [
  ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
  ['2004/05', 165, 938, 522, 998, 450, 614.6],
  ['2005/06', 135, 1120, 599, 1268, 288, 682],
  ['2006/07', 157, 1167, 587, 807, 397, 623],
  ['2007/08', 139, 1110, 615, 968, 215, 609.4],
  ['2008/09', 136, 691, 629, 1026, 366, 569.6],
];

const GraphChart = () => {
  return (
    <div className="chart">
      <div className="chart__element">
        <Chart
          className="chart__element__graph"
          chartType="LineChart"
          width="350x"
          height="350px"
          data={dataLine}
          options={optionsLine}
        />
      </div>
      <div className="chart__element">
        <Chart
          className="chart__element__graph"
          chartType="PieChart"
          data={dataPie}
          options={optionsPie}
          width="350px"
          height="350px"
        />
      </div>
    </div>
  );
};

export default GraphChart;
