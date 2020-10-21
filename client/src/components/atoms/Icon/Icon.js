import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DeliveryIcon from '../../../assets/icons/delivery.svg';
import SaleIcon from '../../../assets/icons/sale.svg';
import ServiceIcon from '../../../assets/icons/customerservice.svg';
import PaymentsIcon from '../../../assets/icons/payments.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 50px;
`;
const StyledIcon = styled.div`
  background-image: url(${DeliveryIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 150px;
  ${({ sale }) =>
    sale &&
    css`
      background-image: url(${SaleIcon});
    `};
  ${({ service }) =>
    service &&
    css`
      background-image: url(${ServiceIcon});
    `};
  ${({ payments }) =>
    payments &&
    css`
      background-image: url(${PaymentsIcon});
    `};
`;

const StyledText = styled.h5`
  font-size: 24px;
  color: #253b57;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;
const StyledDescription = styled.p`
  font-size: 20px;
  color: #acb4bb;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;
const Icon = ({ sale, service, payments, header, description }) => (
  <StyledWrapper>
    <StyledIcon sale={sale} service={service} payments={payments} />
    <StyledText>{header}</StyledText>
    <StyledDescription>{description}</StyledDescription>
  </StyledWrapper>
);

Icon.propTypes = {
  sale: PropTypes.bool.isRequired,
  service: PropTypes.bool.isRequired,
  payments: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Icon;
