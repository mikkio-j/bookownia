import styled from 'styled-components';

const StyledText = styled.div`
  font-family: 'Ubuntu';
  font-size: 48px;
  color: ${({ theme }) => theme.colors.lightgray};
  font-weight: ${({ theme }) => theme.bold};
  font-size: 18px;
`;

export default StyledText;
