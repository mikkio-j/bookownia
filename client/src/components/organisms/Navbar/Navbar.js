import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo/Logo';
import CartIcon from '../../../assets/icons/cart.svg';

const StyledWrapper = styled.nav`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  background: url(${CartIcon});
  width: 45px;
  height: 45px;
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledUnorderedList = styled.ul`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.lightgray};

  &.active {
    color: ${({ theme }) => theme.colors.darkgray};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar = () => (
  <StyledWrapper>
    <Logo />
    <StyledUnorderedList>
      <StyledListItem className="active">Strona Główna</StyledListItem>
      <StyledListItem>Książki</StyledListItem>
      <StyledListItem>Czasopisma</StyledListItem>
      <StyledListItem>Podręczniki</StyledListItem>
      <StyledListItem>Moje konto</StyledListItem>
      <StyledListItem>
        <StyledIcon />
      </StyledListItem>
    </StyledUnorderedList>
  </StyledWrapper>
);

export default Navbar;
