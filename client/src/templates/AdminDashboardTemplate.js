import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';
import Chart from '../components/organisms/Chart/Chart';
import Logo from '../assets/pictures/dashboard_logo.svg';
import BellIcon from '../assets/icons/bell.svg';
import BellIconNotification from '../assets/icons/bell_notification.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import ProfilePicture from '../assets/pictures/user.png';
import Heading from '../components/atoms/Heading/Heading';

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
const StyledHeading = styled(Heading)`
  margin-left: 50px;
  color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
`;
const StyledCellWrapper = styled.div`
  display: flex;
`;
const StyledCell = styled.div`
  width: 280px;
  height: 74px;
  margin: 40px 0 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 14px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  p {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    p {
      font-size: 30px;
    }
    span {
      color: #0ca324;
      margin-left: 10px;
      font-size: 18px;
      ${({ red }) =>
        red &&
        css`
          color: #ff0000;
        `}
    }
  }
`;

const AdminDashboardTemplate = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <StyledWrapper>
        <StyledNav>
          <StyledLogo />
          <StyledNavCategory>Management</StyledNavCategory>
          <StyledUnorderedList>
            <StyledList>
              <i className="fas fa-chart-pie" />
              Statystyki
            </StyledList>
            <StyledList>
              <i className="fas fa-user-alt" />
              Klienci
            </StyledList>
            <StyledList>
              <i className="fas fa-user-alt" />
              Zamówienia
            </StyledList>
            <StyledList>
              <i className="fas fa-tag" />
              Produkty
            </StyledList>
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
        <StyledChildContainer>
          <StyledHeading>Statystyki</StyledHeading>
          <StyledCellWrapper>
            <StyledCell>
              <p>Całkowity zysk</p>
              <div>
                <p>12,500 PLN</p>
                <span>+3,55%</span>
              </div>
            </StyledCell>
            <StyledCell>
              <p>Całkowite wydatki</p>
              <div>
                <p>2,500 PLN</p>
                <span>-2,55%</span>
              </div>
            </StyledCell>
            <StyledCell red>
              <p>Nowi Użytkownicy</p>
              <div>
                <p>679</p>
                <span>-4,76%</span>
              </div>
            </StyledCell>
          </StyledCellWrapper>
          <Chart />
        </StyledChildContainer>
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default AdminDashboardTemplate;
