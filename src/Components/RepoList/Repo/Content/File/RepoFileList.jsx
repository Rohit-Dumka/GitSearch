import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import SectionItem from '../../../../Shared/Section/ItemList/Item/SectionItem';

const RepoFileList = ({ content }) => (
  <ListGroup className="FileList">
    {
      content
        .sort()
        .sort((file) => (file.type !== 'dir' ? 1 : -1))
        .map((file) => <SectionItem item={file} />)
    }
  </ListGroup>
);

RepoFileList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default RepoFileList;
