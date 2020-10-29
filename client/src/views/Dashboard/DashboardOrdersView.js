import React from 'react';
import AdminDashboardTemplate from '../../templates/AdminDashboardTemplate';
import DashboardOrders from '../../components/organisms/Dashboard/DashboardOrders';

const DashboardOrdersView = () => (
  <>
    <AdminDashboardTemplate>
      <DashboardOrders />
    </AdminDashboardTemplate>
  </>
);

export default DashboardOrdersView;
