import React, { Component } from 'react';
import Dashboard from '../dashboard/Dashboard';

class BusinessPro extends Component {
  render() {
    return (
      <div>
        <div>
          <Dashboard />
          {/* main body */}
          <div style={{ marginBottom: '200px;' }}></div>
        </div>
      </div>
    );
  }
}

export default BusinessPro;
