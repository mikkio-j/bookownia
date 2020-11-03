import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  z-index: 999999;

  p {
    padding: 0 7px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: auto 0;
  }
  div {
    display: flex;
    button {
      width: 50%;
      height: 50px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.2);
      font-weight: 700;
      color: #4f6dfd;
      border-right: none;
      border-bottom: none;
      outline: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
    }
    .cancel {
      border-left: none;
      color: red;
    }
  }
  transition: 0.3s;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  &.animation {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const ConfirmationMessage = ({ message, popup }) => (
  <StyledWrapper className={popup && 'animation'}>
    <p>{message}</p>
    <div>
      <button className="cancel">Anuluj</button>
      <button>Tak</button>
    </div>
  </StyledWrapper>
);

ConfirmationMessage.propTypes = {};

export default ConfirmationMessage;
