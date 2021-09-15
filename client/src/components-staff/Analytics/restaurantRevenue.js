import React from 'react';
import { Container } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Loss', 'Advertisement', 'Takeaway'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
      responsive: true
    }
  ]
};

const restaurantRevenue = () => (
  <div style={{ width: '30rem' }}>
    <Doughnut data={data} />
  </div>
);

export default restaurantRevenue;
