import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './InfoModalToggler.css';
import { FaQuestion } from "react-icons/fa";

const InfoModalToggler = ({ handleShowInfoModal }) => (
  <Button
    className="InfoModalToggler"
    onClick={handleShowInfoModal}
    variant="dark"
  >
  <FaQuestion />
  </Button>
);

InfoModalToggler.propTypes = {
  handleShowInfoModal: PropTypes.func.isRequired,
};

export default InfoModalToggler;
