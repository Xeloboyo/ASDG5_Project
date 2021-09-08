import React from 'react';
import { Form, Container } from 'react-bootstrap';

export const Settings = () => {
  return (
    <Container>
      <Form>
        {['Notification'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`Send Email ${type}`}
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`Send SMS ${type}`}
            />
          </div>
        ))}
      </Form>
    </Container>
  );
};

export default Settings;
