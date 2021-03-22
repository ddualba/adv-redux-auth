import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, LOGOUT } from './types';

export const signup = formProps => async dispatch => {
  try {
    const response = await axios.post('/api/users/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};

export const signin = formProps => async dispatch => {
  try {
    const response = await axios.post('/api/users/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
