import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

import Overview from './components/Analytics/Overview';
import RestaurantPerformance from './components/Analytics/RestaurantPerformance';
import Analytics from './components/Analytics/Analytics';
import Ticket from './components/StaffTicket/Ticket';
import UserLists from './components/Analytics/UserLists';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Overview /> */}
    {/* <RestaurantPerformance /> */}
    <Analytics />
    {/* <Ticket /> */}
    {/* <UserLists /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
