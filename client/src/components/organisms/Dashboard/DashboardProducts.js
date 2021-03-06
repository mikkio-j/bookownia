import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

const StyledHeading = styled(Heading)`
  margin-left: 50px;
  color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  @media (max-width: 650px) {
    margin-left: 10px;
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
const StyledStatisticsWrapper = styled.div`
  width: 100%;
`;

const DashboardCustomers = () => (
  <>
    <StyledHeading>Produkty</StyledHeading>
    <StyledStatisticsWrapper></StyledStatisticsWrapper>
  </>
);

export default DashboardCustomers;
