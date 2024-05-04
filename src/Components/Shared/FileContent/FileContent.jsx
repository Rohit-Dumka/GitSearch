import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/github';
import './FileContent.css';

const FileContent = ({ file }) => {
  const { pathname } = useLocation();
  if (file.isImage) {
    return (
      <div className="FileContent Image bg-light my-2">
        <img
          alt="file content"
          src={
            `data:image/${
              pathname.substring(pathname.lastIndexOf('.'))
            };base64,${
              file.content
            }`
          }
        />
      </div>
    );
  }
  return (
    <SyntaxHighlighter className="FileContent bg-light px-2 mb-2" style={a11yLight}>
      {file.content}
    </SyntaxHighlighter>
  );
};

FileContent.propTypes = {
  file: PropTypes.objectOf({
    content: PropTypes.string.isRequired,
    isImage: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FileContent;
