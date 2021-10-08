import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default Dashboard;
