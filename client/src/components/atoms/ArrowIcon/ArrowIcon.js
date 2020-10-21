import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowLeft from '../../../assets/icons/arrow_left.svg';
import ArrowRight from '../../../assets/icons/arrow_right.svg';

const StyledArrowIcon = styled.button`
  width: 100px;
  height: 100px;
  background: url(${({ left }) => (left ? ArrowLeft : ArrowRight)});
`;

const ArrowIcon = ({ left, label }) => <StyledArrowIcon type="button" title={label} left={left} />;

ArrowIcon.propTypes = {
  left: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default ArrowIcon;
