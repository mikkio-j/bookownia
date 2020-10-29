import React, { useState } from 'react';
import styled from 'styled-components';
import ConfirmationMessage from '../../atoms/Confirmation/ConfirmationMessage';

const data = [
  {
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
    age: 12,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Bren',
    surname: 'Spacey',
    email: 'bren@gmail.com',
    age: 24,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Marry',
    surname: 'Malone',
    email: 'marry@gmail.com',
    age: 18,
    gender: 'Female',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    age: 25,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    age: 19,
    gender: 'Female',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    age: 12,
    gender: 'Female',
    id: 213217321,
  },
  {
    name: 'John',
    surname: 'Doe',
    email: 'john@gmail.com',
    age: 12,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Bren',
    surname: 'Spacey',
    email: 'bren@gmail.com',
    age: 24,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Marry',
    surname: 'Malone',
    email: 'marry@gmail.com',
    age: 18,
    gender: 'Female',
    id: 213217321,
  },
  {
    name: 'Shohail',
    surname: 'Etripen',
    email: 'shohail@gmail.com',
    age: 25,
    gender: 'Male',
    id: 213217321,
  },
  {
    name: 'Aseka',
    surname: 'Osaka',
    email: 'aseka@gmail.com',
    age: 19,
    gender: 'Female',
    id: 213217321,
  },
  {
    name: 'Meuko',
    surname: 'Maiko',
    email: 'meuko@gmail.com',
    age: 12,
    gender: 'Female',
    id: 213217321,
  },
];

const StyledTable = styled.table`
  display: block;
  overflow-y: scroll;
  height: 700px;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto';
  width: 95%;
  border-spacing: 0 50px 0 0;
  overflow-y: scroll;
  margin: 20px 100px;
  font-weight: 300;
  border-spacing: 10px;
  font-size: 26px;
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
  th {
    color: white;
    text-align: left;
    font-weight: 400;
    font-size: 20px;
    padding: 0 100px 0 0;
  }
  tr {
    padding: 10px;
    &:hover {
      color: white;
    }
    td {
      cursor: pointer;
      i {
        padding: 15px;
        &.fa-trash:hover {
          color: red;
        }
        &:hover {
          color: #6f77ba;
        }
      }
    }
  }
`;
const Table = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <ConfirmationMessage
        popup={popup}
        onClick={(e) => setPopup(false)}
        message="Czy na pewno chcesz usunąć użytkownika?"
      />

      <StyledTable>
        <thead>
          <tr>
            <th>id</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Email</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email, surname }) => (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>
                <i onClick={(e) => setPopup(true)} className="fas fa-trash" />
                <i className="fas fa-edit" />
                <i className="fas fa-info" />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
