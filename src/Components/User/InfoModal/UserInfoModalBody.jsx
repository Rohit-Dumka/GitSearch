import React from 'react';

const UserInfoModalBody = () => (
  <>
    <p className="mb-3">
      Click on
      <em>{' Repos, Gists, Followers, Following, '}</em>
      or
      <em>{' the location '}</em>
      to toggle their corresponding sections.
    </p>
    <p className="mb-0">
      Once a section loads, you can click on list items and back buttons
      where applicable to navigate back and forth through the app content.
    </p>
  </>
);

export default UserInfoModalBody;
