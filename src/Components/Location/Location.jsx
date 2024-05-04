import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import { getLocation } from '../../API/locationAPI';
import LocationContent from './Content/LocationContent';

const Location = () => {
  const { address } = useLocation();
  return (
    <Section
      title={`Location: ${address}`}
      get={getLocation(address)}
      view={({ latitude, longitude, label }) => (
        <LocationContent latitude={latitude} longitude={longitude} label={label} />
      )}
    />
  );
};

export default Location;
