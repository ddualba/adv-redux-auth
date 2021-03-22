import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import * as actions from '../../actions/auth';
import { signin } from '../../actions/auth';
import PropTypes from 'prop-types';

const Signin = ({ handleSubmit, signin, errorMessage, history }) => {
  const onSubmit = formProps => {
    console.log('attempting signin');
    signin(formProps);
    history.push('/feature');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor=''>Email</label>
        <Field name='email' type='text' component='input' autoComplete='none' />
      </fieldset>
      <fieldset>
        <label htmlFor=''>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='none'
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign in!</button>
    </form>
  );
};

Signin.propTypes = {
  signin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'signin' })
)(Signin);
