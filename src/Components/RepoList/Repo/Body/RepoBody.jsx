import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './RepoBody.css';

const RepoBody = ({ repo }) => {
  const { login } = useParams();
  const { pathname } = useLocation();
  const [showingContent, setShowingContent] = useState(pathname.includes('content'));
  return (
    <Card className="RepoBody bg-light">
      <Card.Body className="Body">
        <Card.Text className="Text">
          <Card.Title className="Title">
            {repo.fullName}
            {repo.forked ? ' (Forked)' : ' (Original)'}
          </Card.Title>
          {repo.description && <p className="Description">{repo.description}</p>}
        </Card.Text>
        <Link
          className="btn btn-dark"
          to={showingContent ? `/${login}/repos/${repo.name}` : `/${login}/repos/${repo.name}/content`}
          onClick={() => setShowingContent(!showingContent)}
        >
          {showingContent ? 'Hide Content' : 'View Content'}
        </Link>
        <br />
      </Card.Body>
    </Card>
  );
};

RepoBody.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RepoBody;
