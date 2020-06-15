import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileFetch } from '../../actions/actions';

import Header from '../header/Header';
import SignupForm from '../signupForm/SignupForm';
import LoginForm from '../loginForm/LoginForm';
import MainPage from '../mainPage/mainPage';
import PageNotFound from '../pageNotFound/pageNotFound';

import PrivateRoute from '../privateRoute/PrivateRoute';
import PublicRoute from '../publicRoute/PublicRoute';

import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getProfileFetch());
  }, [currentUser.id]);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={MainPage} />
        <PublicRoute exact path="/login" component={LoginForm} />
        <PublicRoute exact path="/signup" component={SignupForm} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
