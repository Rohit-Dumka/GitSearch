import get from './shared/get';

export const getRepoList = (login) => (setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/users/${login}/repos`,
    setSearching,
    setFound,
    setRepos,
    (res) => ({
      name: res.name,
      url: `/${login}/repos/${res.name}`,
    }),
    false,
  )
);

export const getRepo = (login, name) => (setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${name}`,
    setSearching,
    setFound,
    setRepos,
    (response) => ({
      name: response.name,
      fullName: response.full_name,
      description: response.description,
      forked: response.fork,
    }),
    true,
  )
);

export const getRepoContent = (login, name) => (setSearching, setFound, setContent) => {
  const repoName = name.substring(0, name.indexOf('/')) || name;
  const dirName = `/${name.substring(name.indexOf('content') + 'content'.length + 1)}`;
  const contentPath = dirName !== '/' ? dirName : '';
  get(
    `https://api.github.com/repos/${login}/${repoName}/contents${contentPath}?ref=master`,
    setSearching,
    setFound,
    setContent,
    (res) => ({
      name: res.name.length < 70 ? res.name : `${res.name.substring(0, 70)}...`,
      url:
        res.type === 'dir'
          ? `/${login}/repos/${name}/${res.name}`
          : `/${login}/repos/${repoName}/file/${res.path}`,
      type: res.type,
    }),
    false,
  );
};

export const getRepoFile = (
  login, repoName, filePath,
) => (
  setSearching, setFound, setFollowers,
) => (
  get(
    `https://api.github.com/repos/${login}/${repoName}/contents/${filePath}?ref=master`,
    setSearching,
    setFound,
    setFollowers,
    (res) => {
      const isImage = (
        res.name.endsWith('.tif')
        || res.name.endsWith('.tiff')
        || res.name.endsWith('.bmp')
        || res.name.endsWith('.jpg')
        || res.name.endsWith('.jpeg')
        || res.name.endsWith('.gif')
        || res.name.endsWith('.png')
        || res.name.endsWith('.eps')
        || res.name.endsWith('.raw')
        || res.name.endsWith('.cr2')
        || res.name.endsWith('.nef')
        || res.name.endsWith('.orf')
        || res.name.endsWith('.sr2')
      );
      return {
        content: isImage ? res.content : atob(res.content),
        isImage,
      };
    },
    true,
  )
);

export default {
  getRepoList,
  getRepo,
  getRepoContent,
  getRepoFile,
};
