import get from './shared/get';

export const getFollowingList = (login) => (setSearching, setFound, setFollowing) => (
  get(
    `https://api.github.com/users/${login}/following`,
    setSearching,
    setFound,
    setFollowing,
    (res) => ({
      name: res.login,
      url: `/${res.login}`,
    }),
    false,
  )
);

export default { getFollowingList };
