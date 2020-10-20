import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const StyledWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 170px);
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: translateY(100%);
  transition: transform 0.3s;
  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateY(0);
    `};
`;

const StyledUnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 20px 0;
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  &:hover {
    color: ${({ theme }) => theme.colors.darkgray};
  }
  &.active {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

const Sidebar = ({ location: { pathname }, isVisible }) => (
  <StyledWrapper isVisible={isVisible}>
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
  </StyledWrapper>
);

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default withRouter(Sidebar);
