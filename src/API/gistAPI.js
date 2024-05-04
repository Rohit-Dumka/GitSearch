import get from './shared/get';

export const getGistList = (login) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/users/${login}/gists`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      name: res.description || '[No Title]',
      url: `/${login}/gists/${res.id}`,
    }),
    false,
  )
);

export const getGistFileList = (login, id) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/gists/${id}`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      files: (
        Object.values(res.files).map((file) => ({
          name: file.filename,
          url: `/${login}/gists/${id}/${file.filename}`,
          type: 'file',
        }))
      ),
    }),
    true,
  )
);

export const getGistFile = (id, name) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/gists/${id}`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      content: (
        Object.values(res.files)
          .find((file) => file.filename === name)
          .content
      ),
    }),
    true,
  )
);

export default { getGistList, getGistFileList, getGistFile };
