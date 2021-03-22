import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Feature from './components/Feature';
import PrivateRoute from './components/auth/PrivateRoute';

const store = createStore(
  rootReducer,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/signout' component={Signout} />
        <Route path='/signin' component={Signin} />
        <PrivateRoute path='/feature' component={Feature} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
