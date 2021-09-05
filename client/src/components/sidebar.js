import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <ListGroup>
      <ListGroup.Item action href="#">
        Tickets
        {/* See your takeaway Ticket */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Analytics
        {/* Check your Restaurant Analytics */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Profile
        {/* Change your Profile */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Settings
        {/* Change your Settings */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Help
        {/* How to use, etc */}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
