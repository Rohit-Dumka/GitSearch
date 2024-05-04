import axios from 'axios';

const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const handleFound = (setSearching, setFound, setItems, parseItem, isSingle) => (res) => {
  setItems(isSingle ? parseItem(res.data) : res.data.map(parseItem));
  setFound(true);
  setSearching(false);
};

const handleNotFound = (setSearching, setFound, setItems) => () => {
  setItems([]);
  setFound(false);
  setSearching(false);
};

const get = (url, setSearching, setFound, setItems, parseItem, isSingle) => (
  axios
    .get(encodeURI(url), { headers: { Authorization: `token ${githubAccessToken}` } })
    .then(handleFound(setSearching, setFound, setItems, parseItem, isSingle))
    .catch(handleNotFound(setSearching, setFound, setItems))
);

export default get;