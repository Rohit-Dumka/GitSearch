import React from 'react';
import PropTypes from 'prop-types';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import './LocationContent.css';

const LocationContent = ({ latitude, longitude, label }) => (
  <MapContainer
    className="LocationContent"
    center={[latitude, longitude]}
    zoom={13}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[latitude, longitude]}>
      <Popup>
        {label}
      </Popup>
    </Marker>
  </MapContainer>
);

LocationContent.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default LocationContent;