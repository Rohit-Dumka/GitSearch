import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import './SectionItem.css';

const SectionItem = ({ item, isUser }) => (
  <Link
    className="ItemLink"
    to={item.url}
    onClick={
      () => {
        if (isUser) {
          document.getElementsByClassName('SearchBox')[0].value = item.name;
        }
      }
    }
  >
    <ListGroup.Item className="SectionItem text-center mb-2">
      <h5 className="ItemName">
        {
          item.type && (
            item.type === 'dir'
              ? <FaFolder className="Icon" />
              : <FaFileAlt className="Icon" />

          )
        }
        {item.name}
      </h5>
    </ListGroup.Item>
  </Link>
);

SectionItem.propTypes = {
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
  isUser: PropTypes.bool,
};

SectionItem.defaultProps = { isUser: false };

export default SectionItem;
