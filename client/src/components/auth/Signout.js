import React, { useEffect } from 'react';
// import  { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Signout = ({ logout }) => {
  useEffect(() => {
    logout();
  });
  return <div>Sorry to see you go</div>;
};

export default connect(null, { logout })(Signout);
