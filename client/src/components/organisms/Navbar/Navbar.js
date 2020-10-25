import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Link, withRouter } from 'react-router-dom';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import Logo from '../../atoms/Logo/Logo';
import CartIcon from '../../../assets/icons/cart.svg';
// import MenuIcon from '../../../assets/icons/menu.svg';

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
  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 475px) {
    width: 100%;
    height: 80px;
  }
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
  background: url(${CartIcon});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s;
  transform-origin: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

// const StyledMenuIcon = styled.div`
//   display: none;
//   width: 45px;
//   height: 45px;
//   margin-left: 20px;
//   background: url(${MenuIcon});
//   background-size: 80%;
//   background-position: center;
//   background-repeat: no-repeat;
//   transition: transform 0.3s;
//   transform-origin: center;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.9;
//   }
//   @media ${({ theme }) => theme.device.laptop} {
//     display: block;
//   }
//   @media (max-width: 360px) {
//     margin-left: 0;
//   }
// `;

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

const Navbar = ({ location: { pathname } }) => (
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
        <Link to="/cart">
          <StyledCartIcon />
        </Link>
      </StyledListWrapper>
    </StyledWrapper>
    <NavbarMobile />
  </>
);

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  location: {
    pathname: '/',
  },
};

export default withRouter(Navbar);
