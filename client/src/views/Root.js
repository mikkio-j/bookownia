import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';
import MainTemplate from '../templates/MainTemplate';
import DashboardStatisticsView from './Dashboard/DashboardStatisticsView';
import DashboardCustomersView from './Dashboard/DashboardCustomersView';
import DashboardOrdersView from './Dashboard/DashboardOrdersView';
import DashboardProductsView from './Dashboard/DashboardProductsView';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainTemplate} />
          <Route exact path="/books" component={MainTemplate} />
          <Route exact path="/magazines" component={MainTemplate} />
          <Route exact path="/schoolbooks" component={MainTemplate} />
          <Route exact path="/my-account" component={MainTemplate} />
          <Route exact path="/dashboard" component={DashboardStatisticsView} />
          <Route exact path="/dashboard/statistics" component={DashboardStatisticsView} />
          <Route exact path="/dashboard/customers" component={DashboardCustomersView} />
          <Route exact path="/dashboard/orders" component={DashboardOrdersView} />
          <Route exact path="/dashboard/products" component={DashboardProductsView} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default Root;
