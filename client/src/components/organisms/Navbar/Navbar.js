import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import CartIcon from '../../../assets/icons/cart.svg';
import MenuIcon from '../../../assets/icons/menu.svg';

const StyledWrapper = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledListWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  margin-left: 40px;
  background: url(${CartIcon});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s;
  transform-origin: center;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const StyledMenuIcon = styled.div`
  display: none;
  width: 45px;
  height: 45px;
  margin-left: 20px;
  background: url(${MenuIcon});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s;
  transform-origin: center;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
  }
`;

const StyledUnorderedList = styled.ul`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

const StyledListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.lightgray};
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.darkgray};
  }
  &.active {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;

const Navbar = ({ location: { pathname } }) => (
  <StyledWrapper>
    <Logo />
    <StyledListWrapper>
      <StyledUnorderedList>
        <StyledListItem className={pathname === '/' && 'active'}>
          <StyledNavLink exact to="/">
            Strona Główna
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname === '/books' && 'active'}>
          <StyledNavLink to="/books">Książki</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname === '/magazines' && 'active'}>
          <StyledNavLink to="/magazines">Czasopisma</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname === '/schoolbooks' && 'active'}>
          <StyledNavLink to="/schoolbooks">Podręczniki</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname === '/my-account' && 'active'}>
          <StyledNavLink to="/my-account">Moje konto</StyledNavLink>
        </StyledListItem>
      </StyledUnorderedList>
      <StyledMenuIcon />
      <Link to="/cart">
        <StyledCartIcon />
      </Link>
    </StyledListWrapper>
  </StyledWrapper>
);

Navbar.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withRouter(Navbar);
