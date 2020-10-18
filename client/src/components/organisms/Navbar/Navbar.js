import React, { useState } from 'react';
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
  background-color: #fff;
  z-index: 9999;
  position: relative;
  padding: 0 20px;
`;

const StyledListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 60%;
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

  @media ${({ theme }) => theme.device.laptop} {
    margin-left: 15px;
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
  width: 100%;
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

const StyledMenuAccordion = styled.ul`
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-left: 0;
  width: 100%;
  transition: transform 0.3s;
  li {
    margin-bottom: 20px;
  }
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-100%')});
  opacity: (${({ isVisible }) => (isVisible ? '0' : '1')});
`;

const Navbar = ({ location: { pathname } }) => {
  const [isMenuAccordionVisible, setMenuAccordion] = useState(false);
  return (
    <>
      <StyledWrapper>
        <Logo />
        <StyledListWrapper>
          <StyledUnorderedList>
            <StyledListItem className={pathname === '/' && 'active'}>
              <StyledNavLink exact to="/">
                Strona Główna
              </StyledNavLink>
            </StyledListItem>
            <StyledListItem className={pathname.includes('/books') && 'active'}>
              <StyledNavLink to="/books">Książki</StyledNavLink>
            </StyledListItem>
            <StyledListItem className={pathname.includes('/magazines') && 'active'}>
              <StyledNavLink to="/magazines">Czasopisma</StyledNavLink>
            </StyledListItem>
            <StyledListItem className={pathname.includes('/schoolbooks') && 'active'}>
              <StyledNavLink to="/schoolbooks">Podręczniki</StyledNavLink>
            </StyledListItem>
            <StyledListItem className={pathname.includes('/my-account') && 'active'}>
              <StyledNavLink to="/my-account">Moje konto</StyledNavLink>
            </StyledListItem>
          </StyledUnorderedList>
          <StyledMenuIcon onClick={() => setMenuAccordion(!isMenuAccordionVisible)} />
          <Link to="/cart">
            <StyledCartIcon />
          </Link>
        </StyledListWrapper>
      </StyledWrapper>
      <StyledMenuAccordion isVisible={isMenuAccordionVisible}>
        <StyledListItem className={pathname === '/' && 'active'}>
          <StyledNavLink exact to="/">
            Strona Główna
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname.includes('/books') && 'active'}>
          <StyledNavLink to="/books">Książki</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname.includes('/magazines') && 'active'}>
          <StyledNavLink to="/magazines">Czasopisma</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname.includes('/schoolbooks') && 'active'}>
          <StyledNavLink to="/schoolbooks">Podręczniki</StyledNavLink>
        </StyledListItem>
        <StyledListItem className={pathname.includes('/my-account') && 'active'}>
          <StyledNavLink to="/my-account">Moje konto</StyledNavLink>
        </StyledListItem>
      </StyledMenuAccordion>
    </>
  );
};

Navbar.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withRouter(Navbar);
