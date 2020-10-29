import React from 'react';
import AdminDashboardTemplate from '../../templates/AdminDashboardTemplate';
import DashboardProducts from '../../components/organisms/Dashboard/DashboardProducts';

const DashboardProductsView = () => (
  <>
    <AdminDashboardTemplate>
      <DashboardProducts />
    </AdminDashboardTemplate>
  </>
);

export default DashboardProductsView;
