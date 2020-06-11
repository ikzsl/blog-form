import React, { useEffect } from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileFetch } from '../../actions/actions';

import Header from '../header/Header';
import SignupForm from '../signupForm/SignupForm';
import LoginForm from '../loginForm/LoginForm';
import MainPage from '../mainPage/mainPage';
import PageNotFound from '../pageNotFound/pageNotFound';

import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getProfileFetch());
  }, [currentUser.id]);

  const { id } = currentUser;

  return (
    <HashRouter>
      {id ? <Redirect to="/" /> : <Redirect to="/login" />}
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
