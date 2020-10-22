import styled, { css } from 'styled-components';
import SearchIcon from '../../../assets/icons/search.svg';

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #acb4bb;
  border-radius: 6px;
  font-family: 'Roboto';
  outline: none;
  width: 250px;
  height: 45px;
  font-weight: ${({ theme }) => theme.bold};
  &::placeholder {
    opacity: 0.4;
    font-weight: ${({ theme }) => theme.regular};
  }
  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.colors.tertiary};
      padding: 10px 20px 10px 40px;
      background-image: url(${SearchIcon});
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
      @media (max-width: 500px) {
        width: 100%;
      }
    `};
`;

export default StyledInput;
