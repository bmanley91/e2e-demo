import React from 'react';
import PropTypes from 'prop-types';

export default function Dashboard({ user }) {
    return (
      <>
        <h2>Dashboard</h2>
        <p>Hello {user}</p>
      </>
    );
}

Dashboard.propTypes = {
  user: PropTypes.string
}
