import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const StyledWrapper = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 9999;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
  }
`;

const StyledUnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 20px 0;
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightgray};
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-size: 10px;
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

const StyledIcon = styled.i`
  font-size: 28px;
`;
const Sidebar = ({ location: { pathname }, isVisible }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledUnorderedList>
      <StyledListItem className={pathname === '/' && 'active'}>
        <StyledNavLink exact to="/">
          <StyledIcon className="fa fa-home" aria-hidden="true" />
          Strona Główna
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem className={pathname.includes('/books') && 'active'}>
        <StyledNavLink to="/books">
          <StyledIcon className="fas fa-book-open" />
          Książki
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem className={pathname.includes('/schoolbooks') && 'active'}>
        <StyledNavLink to="/schoolbooks">
          <StyledIcon className="fa fa-book" aria-hidden="true" />
          Podręczniki
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem className={pathname.includes('/my-account') && 'active'}>
        <StyledNavLink to="/my-account">
          <StyledIcon className="fa fa-user" aria-hidden="true" />
          Moje konto
        </StyledNavLink>
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
