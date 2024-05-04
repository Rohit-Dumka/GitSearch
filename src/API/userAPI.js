import get from './shared/get';

export const getUser = (login) => (setSearching, setFound, setUser) => (
  get(
    `https://api.github.com/users/${login}`,
    setSearching,
    setFound,
    setUser,
    (res) => ({
      login: res.login,
      name: res.name || '[No Name]',
      bio: res.bio || '[No Bio]',
      location: res.location || '[No Location]',
      avatar: res.avatar_url,
      numberOfPublicRepos: res.public_repos,
      numberOfPublicGists: res.public_gists,
      numberOfFollowers: res.followers,
      numberOfFollowing: res.following,
    }),
    true,
  )
);

export default { getUser };
