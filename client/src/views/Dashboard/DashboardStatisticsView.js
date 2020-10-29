import React from 'react';
import AdminDashboardTemplate from '../../templates/AdminDashboardTemplate';
import DashboardStatistics from '../../components/organisms/Dashboard/DashboardStatistics';

const DashboardStatisticsView = () => (
  <>
    <AdminDashboardTemplate>
      <DashboardStatistics />
    </AdminDashboardTemplate>
  </>
);

export default DashboardStatisticsView;
