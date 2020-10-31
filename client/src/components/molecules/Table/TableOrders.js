import React, { useState } from 'react';
import styled from 'styled-components';
import ConfirmationMessage from '../../atoms/Confirmation/ConfirmationMessage';
import Status from '../../atoms/Status/Status';

const data = [
  {
    id: 213217321,
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
  },
  {
    name: 'Bren',
    surname: 'Spacey',
    email: 'bren@gmail.com',
    id: 213217321,
  },
  {
    name: 'Marry',
    surname: 'Malone',
    email: 'marry@gmail.com',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    id: 213217321,
  },
  {
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
    id: 213217321,
  },
  {
    name: 'Bren',
    surname: 'Spacey',
    email: 'bren@gmail.com',
    id: 213217321,
  },
  {
    name: 'Marry',
    surname: 'Malone',
    email: 'marry@gmail.com',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    id: 213217321,
  },
];

const StyledTableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length + 1}, 1fr);
  margin-bottom: 10px;
`;

const StyledTableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length + 1}, 1fr);
  height: calc(100vh - 250px);
  overflow-y: scroll;
  i {
    font-size: 22px;
    color: white;
    &.fa-trash:hover {
      color: red;
      cursor: pointer;
    }
    &:hover {
      cursor: pointer;
      color: #6f77ba;
    }
    @media (max-width: 600px) {
      font-size: 16px;
      margin: 0 15px;
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #6f77ba;
    border: 0px none #6f77ba;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #6f77ba;
  }
  &::-webkit-scrollbar-track {
    background: #21366f;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  &::-webkit-scrollbar-track:active {
    background: #333333;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const StyledHeading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 24px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  &::first-letter {
    text-transform: uppercase;
  }
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0;
  padding: 24px 0 24px 20px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const StyledRow = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  font-size: 22px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  padding-left: 20px;
  cursor: default;
  display: flex;
  align-items: center;
  margin: 10px 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const StyledIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const StyledStatus = styled(Status)`
  width: 60%;
  height: 100%;
  font-size: 14px;
`;
const Table = () => {
  const [popup, setPopup] = useState(false);
  const headingArray = Object.keys(data[0]);
  return (
    <>
      <ConfirmationMessage
        popup={popup}
        onClick={(e) => setPopup(false)}
        message="Czy na pewno chcesz usunąć użytkownika?"
      />

      <div>
        <StyledTableHead length={headingArray.length}>
          {headingArray.map((headingItem) =>
            headingItem === 'surname' ? null : <StyledHeading>{headingItem}</StyledHeading>
          )}
          <StyledHeading>Akcje</StyledHeading>
          <StyledHeading>Status</StyledHeading>
        </StyledTableHead>
        <StyledTableContent length={headingArray.length}>
          {data.map((item) => (
            <>
              <StyledRow>{item.id}</StyledRow>
              <StyledRow>
                {item.name} {item.surname}
              </StyledRow>
              <StyledRow>{item.email}</StyledRow>
              <StyledIcons>
                <i className="fas fa-trash" />
                <i className="fas fa-edit" />
                <i className="fas fa-info" />
              </StyledIcons>
              <StyledIcons>
                <StyledStatus red>gotowe</StyledStatus>
              </StyledIcons>
            </>
          ))}
        </StyledTableContent>
      </div>
    </>
  );
};

export default Table;
