import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
`;
const StyledButton = styled(Button)`
  height: 45px;
  width: 100px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  letter-spacing: 2px;
  margin-left: 20px;
  transition: 0.3s;
  text-transform: none;
  &:hover {
    cursor: pointer;
    background-color: #d64c4c;
  }
`;
const SearchForm = () => (
  <StyledWrapper>
    <Input search />
    <StyledButton alt>Szukaj</StyledButton>
  </StyledWrapper>
);

export default SearchForm;
