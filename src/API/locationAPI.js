import { OpenStreetMapProvider } from 'leaflet-geosearch';

export const getLocation = (address) => (setSearching, setFound, setLocation) => {
  const provider = new OpenStreetMapProvider();

  return provider.search({ query: address })
    .then((res) => {
      const { x, y, label } = res[0];
      setLocation({ latitude: y, longitude: x, label });
      setFound(true);
      setSearching(false);
    })
    .catch(() => setSearching(false));
};

export default { getLocation };