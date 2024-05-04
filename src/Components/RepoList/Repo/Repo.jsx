import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import RepoBody from './Body/RepoBody';
import { getRepo } from '../../../API/repoAPI';

const Repo = () => {
  const { login, name } = useParams();
  return (
    <Section
      title={`Repo: ${name}`}
      get={getRepo(login, name)}
      view={(repo) => <RepoBody repo={repo} />}
      backUrl={`/${login}/repos`}
    />
  );
};

export default Repo;
