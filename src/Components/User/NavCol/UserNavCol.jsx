import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import './UserNavCol.css';

const UserNavCol = ({ name, url, amount }) => (
  <Col className="UserNavCol" xs={6}>
    {
      (amount > 0) ? (
        <Link className="NavLink" to={url}>
          {`${name}: ${amount}`}
        </Link>
      ) : (
        <h6>
          {`${name}: ${amount}`}
        </h6>
      )
    }
  </Col>
);

UserNavCol.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default UserNavCol;