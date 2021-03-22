import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import * as actions from '../../actions/auth';
import { signup } from '../../actions/auth';

const Signup = ({ handleSubmit, signup, errorMessage, history }) => {
  const onSubmit = formProps => {
    signup(formProps);
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
      <button>Sign up!</button>
    </form>
  );
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'signup' })
)(Signup);
