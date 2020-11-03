import React from 'react';
import styled, { css } from 'styled-components';

const StyledStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 59px;
  border-radius: 12px;

  color: white;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  align-self: center;
  min-width: 150px;
  border: none;
  outline: none;

  ${({ color }) =>
    color === 'green' &&
    css`
      background-color: green;
    `};
  ${({ color }) =>
    color === 'yellow' &&
    css`
      background-color: #ffb800;
    `};
  ${({ color }) =>
    color === 'red' &&
    css`
      background-color: #ff7171;
    `};
`;
const Status = ({ color }) => (
  <StyledStatus color={color}>
    {color === 'red' && 'Nieopłacone'} {color === 'green' && 'Wysłane'}{' '}
    {color === 'yellow' && 'W realizacji'}
  </StyledStatus>
);

export default Status;
