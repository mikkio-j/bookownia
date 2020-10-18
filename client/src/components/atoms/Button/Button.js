import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 69px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  border: none;
  outline: none;
  &:hover {
    background-color: #ff954f;
  }
`;

export default StyledButton;
