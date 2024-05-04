import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const SectionItemList = ({ items, view }) => (
  <ListGroup className="SectionList">
    {items.map(view)}
  </ListGroup>
);

SectionItemList.propTypes = {
  items: PropTypes.array.isRequired,
  view: PropTypes.func.isRequired,
};

export default SectionItemList;
