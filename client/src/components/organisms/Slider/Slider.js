import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../../molecules/Slides/Slide1/Slide1';
import Slide2 from '../../molecules/Slides/Slide2/Slide2';
import Slide3 from '../../molecules/Slides/Slide3/Slide3';

const StyledDot = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: none;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.lightgray};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 375px) {
    width: 10px;
    height: 10px;
  }
`;

class Slider extends Component {
  render() {
    return (
      <Carousel
        showArrows={false}
        showStatus={false}
        // swipeable
        // emulateTouch
        infiniteLoop
        autoPlay
        stopOnHover={false}
        interval={4000}
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <StyledDot
                active
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <StyledDot
              onClick={onClickHandler}
              value={index}
              key={index}
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div>
          <Slide1 />
        </div>
        <div>
          <Slide2 />
        </div>
        <div>
          <Slide3 />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
