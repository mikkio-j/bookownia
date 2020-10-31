import styled, { css } from 'styled-components';

const StyledStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 69px;
  border-radius: 12px;

  color: white;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  border: none;
  outline: none;

  ${({ green }) =>
    green &&
    css`
      background-color: green;
    `};
  ${({ yellow }) =>
    yellow &&
    css`
      background-color: #ffb800;
    `};
  ${({ red }) =>
    red &&
    css`
      background-color: #ff7171;
    `};
`;

export default StyledStatus;
