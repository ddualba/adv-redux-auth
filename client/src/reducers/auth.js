import { AUTH_USER, AUTH_ERROR, LOGOUT } from '../actions/types';

const initialState = {
  authenticated: '',
  errorMessage: ''
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: payload
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: payload };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: ''
      };
    default:
      return state;
  }
};

export default authReducer;
