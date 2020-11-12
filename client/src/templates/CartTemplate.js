import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/atoms/Logo/Logo';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
`;

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 60%;
`;

const StyledUnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const StyledListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  color: ${({ theme }) => theme.colors.lightgray};
  font-weight: 400;
  font-size: 30px;
  font-family: 'Ubuntu', sans-serif;
  cursor: default;
  &.active {
    color: #253b57;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 1100px) {
    font-size: 24px;
  }
  @media (max-width: 950px) {
    font-size: 18px;
  }
`;

const CartTemplate = ({ children, location: { pathname } }) => (
  <>
    <StyledWrapper>
      <StyledNavbar>
        <Logo />
        <StyledListWrapper>
          <StyledUnorderedList>
            <StyledListItem className={pathname === '/cart' && 'active'}>1. Koszyk</StyledListItem>
            <StyledListItem className={pathname.includes('/delivery') && 'active'}>
              2. Adres Wysyłki
            </StyledListItem>
            <StyledListItem className={pathname.includes('/summary') && 'active'}>
              3. Podsumowanie
            </StyledListItem>
          </StyledUnorderedList>
        </StyledListWrapper>
      </StyledNavbar>
      {children}
    </StyledWrapper>
  </>
);

CartTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

CartTemplate.defaultProps = {
  location: {
    pathname: '/',
  },
};

export default withRouter(CartTemplate);
