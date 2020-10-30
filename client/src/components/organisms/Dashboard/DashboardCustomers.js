import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Table from '../../molecules/Table/Table';

const StyledHeading = styled(Heading)`
  margin-left: 50px;
  color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  @media (max-width: 520px) {
    margin-left: 20px;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
const StyledStatisticsWrapper = styled.div`
  width: 100%;
`;

const DashboardCustomers = () => (
  <>
    <StyledHeading>Klienci</StyledHeading>
    <StyledStatisticsWrapper>
      <Table />
    </StyledStatisticsWrapper>
  </>
);

export default DashboardCustomers;
