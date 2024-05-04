import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Spinner = () => (
  <div className="Searching mb-5">
    <HashLoader
      loading
      size={60}
      margin={50}
      color="#343a40"
      css={{ display: 'block', margin: '7rem auto 7rem auto' }}
    />
  </div>
);

export default Spinner;
