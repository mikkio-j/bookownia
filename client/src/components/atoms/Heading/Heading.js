import styled from 'styled-components';

const StyledHeading = styled.p`
  margin: 0;
  font-family: 'Ubuntu';
  font-size: 48px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: ${({ theme }) => theme.regular};
`;

export default StyledHeading;
