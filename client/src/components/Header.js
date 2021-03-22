import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

const Header = ({ authenticated }) => {
  const authLinks = (
    <span>
      <Link to='/signout'>Sign Out</Link>
      <Link to='/feature'>Feature</Link>
    </span>
  );

  const guestLinks = (
    <span>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signin'>Sign In</Link>
    </span>
  );

  return (
    <div className='header'>
      <Link to='/'>Redux Auth</Link>
      {authenticated ? authLinks : guestLinks}
    </div>
  );
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
