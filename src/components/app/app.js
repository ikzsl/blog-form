import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Form3 from '../form/form3';
import Form2 from '../form/form2';
import Form from '../form/form';

import './app.scss';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/login" component={Form2} />
        <Route path="/signup" component={Form3} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
