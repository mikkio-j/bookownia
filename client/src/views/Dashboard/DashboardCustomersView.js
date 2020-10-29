import React from 'react';
import AdminDashboardTemplate from '../../templates/AdminDashboardTemplate';
import DashboardCustomers from '../../components/organisms/Dashboard/DashboardCustomers';

const DashboardCustomersView = () => (
  <>
    <AdminDashboardTemplate>
      <DashboardCustomers />
    </AdminDashboardTemplate>
  </>
);

export default DashboardCustomersView;
