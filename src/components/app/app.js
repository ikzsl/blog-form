import React, { useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileFetch } from '../../actions/actions';

import Signup from '../form/Signup';
import Login from '../form/Login';
import MainPage from '../mainPage/mainPage';
import PageNotFound from '../pageNotFound/pageNotFound';

import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getProfileFetch());
  }, []);

  const { id } = currentUser;

  return (
    <BrowserRouter>
      <div className="App">
        {id ? <Redirect to="/" /> : <Redirect to="/login" />}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
