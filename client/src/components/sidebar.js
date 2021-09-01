import React from 'react';
import { ListGroup } from 'react-bootstrap';

const sidebar = () => {
  return (
    <ListGroup>
      <ListGroup.Item action href="#">
        Home
        {/* Go back to Business Pro Home */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Download
        {/* Download your spreadsheet */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Profile & Settings
        {/* Choose Subscription, Choose Filters, etc... */}
      </ListGroup.Item>

      <ListGroup.Item action href="#">
        Logout
      </ListGroup.Item>
    </ListGroup>
  );
};

export default sidebar;
