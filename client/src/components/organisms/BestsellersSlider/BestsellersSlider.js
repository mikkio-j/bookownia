import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowLeft from '../../../assets/icons/arrow_left.svg';
import ArrowRight from '../../../assets/icons/arrow_right.svg';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import Book from '../../atoms/Book/Book';
import BookCover from '../../../assets/pictures/book.png';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background: white;
  background-color: white;
`;

const StyledBookWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 0 80px;
`;
const StyledTextWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const StyledArrowIcon = styled.button`
  width: 100px;
  height: 100%;
  background-image: url(${({ left }) => (left ? ArrowLeft : ArrowRight)});
  background-repeat: no-repeat;
  background-position: 0 20%;
  background-color: white;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: auto;
  cursor: pointer;
  border: none;
  outline: none;
  ${({ left }) =>
    left &&
    css`
      left: 0;
      right: auto;
    `}
`;

class BestsellersSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { windowWidth } = this.state;
    return (
      <>
        <StyledWrapper>
          <StyledTextWrapper>
            <Heading>Bestsellery</Heading>
            <Text>zobacz więcej</Text>
          </StyledTextWrapper>
        </StyledWrapper>

        <Carousel
          showArrows
          showStatus={false}
          infiniteLoop
          autoPlay={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && <StyledArrowIcon left type="button" onClick={onClickHandler} label={label} />
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && <StyledArrowIcon type="button" onClick={onClickHandler} label={label} />
          }
        >
          <StyledBookWrapper>
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            {windowWidth > 800 && (
              <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            )}
            {windowWidth > 1250 && (
              <>
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
              </>
            )}
          </StyledBookWrapper>
          <StyledBookWrapper>
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            {windowWidth > 800 && (
              <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            )}
            {windowWidth > 1250 && (
              <>
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
              </>
            )}
          </StyledBookWrapper>
          <StyledBookWrapper>
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            {windowWidth > 800 && (
              <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
            )}
            {windowWidth > 1250 && (
              <>
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
                <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
              </>
            )}
          </StyledBookWrapper>
        </Carousel>
      </>
    );
  }
}

export default BestsellersSlider;
