import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import Dashboard from './components/dashboard/Dashboard';
import staffTakeawayTicket from './components/staff-takeaway-ticket/staffTakeawayTicket';
import BusinessPro from './components/business-pro/BusinessPro';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <staffTakeawayTicket /> */}
    <Dashboard />
    {/* <BusinessPro /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
