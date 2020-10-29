import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../assets/pictures/dashboard_logo.svg';
import BellIcon from '../assets/icons/bell.svg';
import BellIconNotification from '../assets/icons/bell_notification.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import ProfilePicture from '../assets/pictures/user.png';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(116.82deg, #5f68b8 0%, #0c2556 100%);
  margin: 0;
  display: flex;
`;

const StyledNav = styled.nav`
  width: 270px;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  a {
    text-decoration: none;
  }
`;
const StyledLogo = styled.div`
  background-image: url(${Logo});
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
`;
const StyledNavCategory = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  margin-left: 50px;
`;
const StyledUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;
const StyledList = styled.li`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  list-style: none;
  padding: 20px 0 20px 50px;
  transition: 0.3s;
  i {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background: rgba(99, 129, 255, 0.5);
  }
  &.active {
    background: rgba(79, 109, 253, 0.5);
  }
`;

const StyledProfileSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 40px 60px;
`;

const StyledIcon = styled.div`
  background-image: url(${BellIcon});
  background-size: 80%;
  height: 40px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      background-image: url(${BellIconNotification});
    `}
  ${({ settings }) =>
    settings &&
    css`
      background-image: url(${SettingsIcon});
    `}
  &:hover {
    background-color: rgba(79, 109, 253, 0.2);
  }
`;

const StyledProfilePicture = styled.div`
  background-image: url(${ProfilePicture});
  background-size: cover;
  height: 40px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
  border-radius: 50px;
  cursor: pointer;
`;

const StyledUsertext = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: white;
  i {
    margin-left: 6px;
  }
  cursor: pointer;
`;

const StyledChildContainer = styled.section`
  width: calc(100% - 320px);
  height: calc(100% - 80px);
  align-self: flex-end;
`;

const AdminDashboardTemplate = ({ children, location: { pathname } }) => (
  <>
    <StyledWrapper>
      <StyledNav>
        <StyledLogo />
        <StyledNavCategory>Management</StyledNavCategory>
        <StyledUnorderedList>
          <NavLink to="../dashboard/statistics">
            <StyledList className={pathname.includes('/statistics') && 'active'}>
              <i className="fas fa-chart-pie" />
              Statystyki
            </StyledList>
          </NavLink>
          <NavLink to="../dashboard/clients">
            <StyledList className={pathname.includes('/clients') && 'active'}>
              <i className="fas fa-user-alt" />
              Klienci
            </StyledList>
          </NavLink>
          <NavLink to="../dashboard/orders">
            <StyledList className={pathname.includes('/orders') && 'active'}>
              <i className="fas fa-shopping-cart" />
              Zamówienia
            </StyledList>
          </NavLink>
          <NavLink to="../dashboard/products">
            <StyledList className={pathname.includes('/products') && 'active'}>
              <i className="fas fa-tag" />
              Produkty
            </StyledList>
          </NavLink>
        </StyledUnorderedList>
        <StyledProfileSection>
          <StyledIcon active />
          <StyledIcon settings />
          <StyledProfilePicture />
          <StyledUsertext>
            Jane Doe
            <i className="fas fa-chevron-down" />
          </StyledUsertext>
        </StyledProfileSection>
      </StyledNav>
      <StyledChildContainer>{children}</StyledChildContainer>
    </StyledWrapper>
  </>
);

AdminDashboardTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

AdminDashboardTemplate.defaultProps = {
  location: {
    pathname: '/',
  },
};

export default withRouter(AdminDashboardTemplate);
