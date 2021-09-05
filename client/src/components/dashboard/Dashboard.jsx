import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <div style={{ marginBottom: '270px;' }}></div> {/* add spacing */}
      </div>
    );
  }
}

export default Dashboard;
