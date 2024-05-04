import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import SectionItemList from '../Shared/Section/ItemList/SectionItemList';
import SectionItem from '../Shared/Section/ItemList/Item/SectionItem';
import { getRepoList } from '../../API/repoAPI';

const RepoList = () => {
  const { login } = useParams();
  return (
    <Section
      title="Repos"
      get={getRepoList(login)}
      view={(repos) => (
        <SectionItemList
          items={repos}
          view={(repo) => <SectionItem item={repo} />}
        />
      )}
    />
  );
};

export default RepoList;
