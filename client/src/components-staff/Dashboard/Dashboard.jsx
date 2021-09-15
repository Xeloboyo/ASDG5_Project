import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';

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
