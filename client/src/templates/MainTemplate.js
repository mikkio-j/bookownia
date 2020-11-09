import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';
import Newsletter from '../components/molecules/Newsletter/Newsletter';
import Footer from '../components/molecules/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
const MainTemplate = ({ children }) => (
  <>
    <StyledWrapper>
      <Navbar />
      {children}
    </StyledWrapper>
    <Newsletter />
    <StyledWrapper>
      <Footer />
    </StyledWrapper>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
