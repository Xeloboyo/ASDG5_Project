import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
      </div>
    );
  }
}

export default Dashboard;

// for testing
