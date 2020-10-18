import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/books" />
        <Route exact path="/magazines" />
        <Route exact path="/schoolbooks" />
        <Route exact path="/my-account" />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
