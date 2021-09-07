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
      borderWidth: 1,
      responsive: true
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
  <div style={{ width: '65rem' }}>
    <Bar data={data} options={options} />
  </div>
);

export default RestaurantPerformance;
