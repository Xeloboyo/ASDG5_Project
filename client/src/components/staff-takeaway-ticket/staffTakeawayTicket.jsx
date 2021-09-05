import React, { Component } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Ticket from '../staff-takeaway-ticket/staffTakeawayTicket';

class staffTakeawayTicket extends Component {
  render() {
    return (
      <div>
        <div>
          <Dashboard />
          <div style={{ marginBottom: '200px;' }}>
            <Ticket />
          </div>
        </div>
      </div>
    );
  }
}

export default staffTakeawayTicket;
