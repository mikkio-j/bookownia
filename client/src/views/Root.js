import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';
import HomeView from './Home';
import BooksView from './Books';
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
          <Route exact path="/" component={HomeView} />
          <Route exact path="/books" component={BooksView} />
          <Route exact path="/magazines" component={HomeView} />
          <Route exact path="/schoolbooks" component={HomeView} />
          <Route exact path="/my-account" component={HomeView} />
          <Route exact path="/dashboard" render={() => <Redirect to="/dashboard/statistics" />} />
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
