import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import UserBody from './Body/UserBody';
import { getUser } from '../../API/userAPI';

const User = () => {
  const { login } = useParams();
  return (
    <Section
      title={`@${login}`}
      get={getUser(login)}
      view={(user) => <UserBody user={user} />}
      hasRoundTop
    />
  );
};

export default User;
