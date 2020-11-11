import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import BirdPicture from '../../../assets/pictures/bird.svg';

const StyledBackground = styled.div`
  background-color: #faf9fd;
`;
const StyledWrapper = styled.section`
  padding: 20px 30px 0;
  margin: 0 auto;
  width: 100%;
  background-color: #faf9fd;
  display: flex;
  justify-content: space-between;
  height: 400px;
  align-items: center;
  max-width: 1400px;
  position: relative;
`;

const StyledPicture = styled.div`
  background-image: url(${BirdPicture});
  background-size: contain;
  width: 30%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  height: 100%;
  @media (max-width: 760px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0.1;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 360px) {
    width: 100%;
    justify-content: center;
  }
  z-index: 5555;
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 620px) {
    justify-content: center;
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;
const StyledInput = styled(Input)`
  width: 250px;
  height: 45px;
  font-size: 16px;
  font-family: 'Ubuntu';
  color: #253b57;
  padding: 0 20px;
  margin-bottom: 10px;
  font-weight: 400;
`;
const StyledButton = styled(Button)`
  width: 100px;
  height: 45px;
  margin-left: 10px;
  font-size: 16px;
  text-transform: none;
  cursor: pointer;
  padding: 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: right;
  @media (max-width: 620px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 26px;
  }
`;
const StyledText = styled(Text)`
  margin-top: 20px;
  color: #253b57;
  opacity: 0.8;
  font-weight: regular;
  text-align: right;
  @media (max-width: 620px) {
    text-align: center;
  }
`;

const Newsletter = () => (
  <StyledBackground>
    <StyledWrapper>
      <StyledPicture />
      <StyledTextWrapper>
        <StyledHeading>Zapisz się do naszego Newslettera</StyledHeading>
        <StyledForm>
          <StyledInput placeholder="twoj@adresmailowy.com" />
          <StyledButton>Subskrybuj</StyledButton>
        </StyledForm>
        <StyledText>Zero spamu, obiecujemy</StyledText>
      </StyledTextWrapper>
    </StyledWrapper>
  </StyledBackground>
);

export default Newsletter;
