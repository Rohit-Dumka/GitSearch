import React from 'react';
import { Card } from 'react-bootstrap';
import SectionHeader from '../Shared/Section/Header/SectionHeader';

const AppHome = () => (
  <>
    <SectionHeader title="Welcome!" hasRoundTop />
    <Card className="UserBody bg-light">
      <Card.Body className="Body">
        <Card.Text className="Text">
          <div className="Inner text-center text-dark">
            <p className="Bio h6 mb-3">
              {'To initiate the app, '}
              <b>start typing into the textbox</b>
              {' at the top-right corner.'}
            </p>
            <p className="Bio h6 mb-1">
              Alternatively, you can click on the footer below to navigate
            </p>
            <p className="Bio h6 mb-1">
              to this project&apos;s GitHub repository where you can find an
            </p>
            <p className="Bio h6 mb-1">
              explanation for each of the libraries used within the app
            </p>
            <p className="Bio h6 mb-3">
              as well as some general information about the app.
            </p>
            <p className="Bio h6 mb-1">
              <b>Thank you</b>
              {' for reviewing my app!'}
            </p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default AppHome;