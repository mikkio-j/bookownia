/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  .control-group {
    padding: 20px 40px;
  }
  .control {
    font-family: 'Ubuntu', sans-serif;
    color: #acb4bb;
    font-weight: 500;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
    span {
      color: #253b57;
    }
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: undefinedpx;
  }
  .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #cccccc;
  }

  .control input:checked ~ .control_indicator {
    background: #fca971;
  }
  .control:hover input:not([disabled]):checked ~ .control_indicator,
  .control input:checked:focus ~ .control_indicator {
    background: #ffaa71;
  }
  .control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-radio .control_indicator {
    border-radius: 50%;
  }

  .control-radio .control_indicator:after {
    left: 7px;
    top: 7px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: #ffffff;
    transition: background 250ms;
  }
  .control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
  }
  .control-radio .control_indicator::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -1.3rem;
    margin-top: -1.3rem;
    background: #ffaa91;
    border-radius: 3rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
  }
  @keyframes s-ripple {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    100% {
      opacity: 0.01;
      transform: scale(1);
    }
  }
  @keyframes s-ripple-dup {
    0% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  .control-radio input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
  }
  .control-radio input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
  }
`;

const RadioForm = ({ title, options }) => {
  const [checkedRadio, setCheckedRadio] = useState('paczkomaty');

  return (
    <StyledWrapper>
      <Heading>{title}</Heading>
      <form className="control-group">
        {options.map((item) => (
          <label
            htmlFor={item.name}
            className="control control-radio"
            onClick={() => setCheckedRadio(item.name)}
          >
            {item.text} {item.price > 0 ? <span>({item.price} zł)</span> : null}
            <input type="radio" name={item.name} checked={checkedRadio === item.name} />
            <div className="control_indicator" />
          </label>
        ))}
      </form>
    </StyledWrapper>
  );
};

RadioForm.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default RadioForm;
