import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import Dashboard from './components/dashboard/Dashboard';
import StaffTicket from './components/staff-ticket/StaffTicket';
import BusinessPro from './components/business-pro/BusinessPro';
import Ticket from './components/cards/CardTicket';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dashboard />
    <StaffTicket />
    {/* <BusinessPro /> */}
    {/* <Ticket /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
