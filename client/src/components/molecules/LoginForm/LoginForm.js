import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const StyledInnerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInnerRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(37, 59, 87, 0.06);
  margin-left: 20px;
  @media (max-width: 820px) {
    border-left: none;
    border-top: 2px solid rgba(37, 59, 87, 0.06);
    margin-left: 0;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (max-width: 865px) {
    margin-top: 30px;
  }
`;

const StyledHeading = styled(Heading)`
  font-weight: 700;
`;

const StyledInputWrapper = styled(Heading)`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledText = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  margin-right: 20px;
  width: 50px;
  height: 21px;
  display: flex;
  text-align: center;
  &.forgot--password {
    margin-right: 0;
    margin-left: 20px;
    width: auto;
    @media (max-width: 415px) {
      font-size: 12px;
    }
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const StyledButton = styled(Button)`
  height: 45px;
  width: 125px;
  text-transform: lowercase;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledFacebookButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 20px;
  width: 295px;
  height: 45px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
  background: linear-gradient(270deg, #49befe 0.01%, #49befe 0.02%, #0e88cb 100.09%);
  border-radius: 12px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: white;
  text-align: center;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @media (max-width: 865px) {
    width: 250px;
  }
  @media (max-width: 415px) {
    height: 55px;
    width: 45%;
    margin: 10px 0;
  }
`;

const StyledGoogleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 20px;
  width: 295px;
  height: 45px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
  background: #ffffff;
  border-radius: 12px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #253b57;
  text-align: center;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @media (max-width: 865px) {
    width: 250px;
  }
  @media (max-width: 415px) {
    height: 55px;
    width: 45%;
    margin: 10px 0;
  }
`;

const LoginForm = () => (
  <StyledWrapper>
    <StyledHeading>Logowanie</StyledHeading>
    <StyledInnerWrapper>
      <StyledInnerLeftWrapper>
        <StyledInputWrapper>
          {/* <StyledText>e-mail</StyledText> */}
          <Input placeholder="E-mail" />
          <StyledButton>zaloguj się</StyledButton>
        </StyledInputWrapper>
        <StyledInputWrapper>
          {/* <StyledText>hasło</StyledText> */}
          <Input type="password" placeholder="Password" />
          <StyledText className="forgot--password">Nie pamiętasz hasła?</StyledText>
        </StyledInputWrapper>
      </StyledInnerLeftWrapper>
      <StyledInnerRightWrapper>
        <StyledFacebookButton>zaloguj się przez Facebook</StyledFacebookButton>
        <StyledGoogleButton>zaloguj się przez Google</StyledGoogleButton>
      </StyledInnerRightWrapper>
    </StyledInnerWrapper>
  </StyledWrapper>
);

// RadioForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//     })
//   ),
// };

export default LoginForm;
