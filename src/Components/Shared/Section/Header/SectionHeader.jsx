import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import './SectionHeader.css';

const SectionHeader = ({ title, hasRoundTop, backUrl }) => (
  <div className={`${hasRoundTop ? 'Round' : 'Square'}Header text-center`}>
    {
      backUrl && (
        <Link className={`${hasRoundTop ? 'Round' : 'Square'},BackButton`} to={backUrl}>
          <FaArrowAltCircleLeft size="2x" />
        </Link>
      )
    }
    <h5 className="text-light">{title}</h5>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool,
  backUrl: PropTypes.string,
};

SectionHeader.defaultProps = {
  hasRoundTop: false,
  backUrl: undefined,
};

export default SectionHeader;
