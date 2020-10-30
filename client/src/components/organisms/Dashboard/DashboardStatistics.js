import React from 'react';
import styled, { css } from 'styled-components';
import Chart from '../../molecules/Chart/Chart';
import Heading from '../../atoms/Heading/Heading';
import Book from '../../atoms/Book/Book';
import BookCover from '../../../assets/pictures/book.png';

const StyledHeading = styled(Heading)`
  margin-left: 50px;
  color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  @media (max-width: 600px) {
    margin-left: 10px;
    margin-top: 50px;
  }
  @media (max-width: 350px) {
    text-align: center;
  }
`;
const StyledStatisticsWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledCellsWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    justify-content: space-between;
    margin-top: 50px;
    margin-left: 20px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 20px;
  }
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
  @media (max-width: 900px) {
    margin: 0;
  }
`;
const StyledBuyMost = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-left: 60px;
  h1 {
    color: white;
    font-size: 22px;
    margin-bottom: 20px;
    width: 100%;
    @media (max-width: 900px) {
      margin-bottom: 0;
    }
    @media (max-width: 600px) {
      margin-bottom: 20px;
      text-align: center;
    }
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    height: 200px;
    margin-bottom: 100px;
    margin-left: 0px;
    padding: 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const StyledChartWrapper = styled.div`
  width: 60%;
  position: relative;
  margin-top: 50px;
  margin-left: 50px;
  h1 {
    position: absolute;
    color: white;
    font-size: 18px;
    left: 50px;
    top: 5px;
  }
  @media (max-width: 900px) {
    width: 90%;
    margin-left: 10px;
  }
`;

const AdminDashboardTemplate = () => (
  <>
    <StyledHeading>Statystyki</StyledHeading>
    <StyledCellsWrapper>
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
    </StyledCellsWrapper>
    <StyledStatisticsWrapper>
      <StyledChartWrapper>
        <Heading>Raport sprzedaży</Heading>
        <Chart />
      </StyledChartWrapper>
      <StyledBuyMost>
        <Heading>Najczęściej kupowane</Heading>
        <Book
          bookCover={BookCover}
          title="Lockdown"
          author="Robert Ziębiński"
          altPosition
          altColor
          small
        />
        <Book
          bookCover={BookCover}
          title="Lockdown"
          author="Robert Ziębiński"
          altPosition
          altColor
          small
        />
        <Book
          bookCover={BookCover}
          title="Lockdown"
          author="Robert Ziębiński"
          altPosition
          altColor
          small
        />
      </StyledBuyMost>
    </StyledStatisticsWrapper>
  </>
);

export default AdminDashboardTemplate;
