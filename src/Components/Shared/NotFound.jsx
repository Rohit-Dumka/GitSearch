import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ page }) => (
  <p className="NotFound h4 text-center">
    {`${page.length < 60 ? page : page.substring(0, 60)} not found...`}
  </p>
);

NotFound.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NotFound;
