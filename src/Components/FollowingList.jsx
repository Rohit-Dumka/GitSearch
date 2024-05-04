import React from 'react';
import { useParams } from 'react-router-dom';
import Section from './Shared/Section/Section';
import SectionItemList from './Shared/Section/ItemList/SectionItemList';
import SectionItem from './Shared/Section/ItemList/Item/SectionItem';
import { getFollowingList } from '../API/followingAPI';

const FollowingList = () => {
  const { login } = useParams();
  return (
    <Section
      title="Following"
      get={getFollowingList(login)}
      view={(following) => (
        <SectionItemList
          items={following}
          view={(user) => <SectionItem item={user} isUser />}
        />
      )}
    />
  );
};

export default FollowingList;