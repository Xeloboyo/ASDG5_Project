import React, { Component } from 'react';
// import Sidebar from '../dashboard/Sidebar';
import Ticket from '../staff-takeaway-ticket/staffTakeawayTicket';

class staffTakeawayTicket extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <Sidebar /> */}
          {/* main body */}
          <div>
            <Ticket />
          </div>
        </div>
      </div>
    );
  }
}

export default staffTakeawayTicket;
