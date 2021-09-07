import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  datasets: [
    {
      label: 'Popularity',
      data: [8, 9, 15, 13, 18, 20, 15],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const RestaurantPerformance = () => (
  <>
    <div className="header">
      <h1 className="title text-center">Restaurant Performance</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default RestaurantPerformance;
