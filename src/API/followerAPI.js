import get from './shared/get';

export const getFollowerList = (login) => (setSearching, setFound, setFollowers) => (
  get(
    `https://api.github.com/users/${login}/followers`,
    setSearching,
    setFound,
    setFollowers,
    (res) => ({
      name: res.login,
      url: `/${res.login}`,
    }),
    false,
  )
);

export default { getFollowerList };
