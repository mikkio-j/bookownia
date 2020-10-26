import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import AdminDashboardTemplate from '../templates/AdminDashboardTemplate';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainTemplate} />
        <Route exact path="/books" component={MainTemplate} />
        <Route exact path="/magazines" component={MainTemplate} />
        <Route exact path="/schoolbooks" component={MainTemplate} />
        <Route exact path="/my-account" component={MainTemplate} />
        <Route exact path="/dashboard" component={AdminDashboardTemplate} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
