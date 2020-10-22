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
`;

const StyledPicture = styled.div`
  background-image: url(${BirdPicture});
  background-size: contain;
  width: 30%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  height: 100%;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledInput = styled(Input)`
  width: 50%;
  height: 45px;
  font-size: 16px;
  font-family: 'Ubuntu';
  color: #253b57;
  padding: 0 20px;
`;
const StyledButton = styled(Button)`
  width: 15%;
  height: 45px;
  margin-left: 10px;
  font-size: 16px;
  text-transform: none;
  cursor: pointer;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: right;
`;
const StyledText = styled(Text)`
  margin-top: 20px;
  color: #253b57;
  opacity: 0.8;
  font-weight: regular;
  text-align: right;
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
