import React from 'react';
import styled from 'styled-components';
import Art6 from './logo/Art6';

const Logo = () => {
  return (
    <Container>
      <Art6></Art6>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  padding: 10px;
  font-size: 2em;
  font-family: Courier;
  color: white;
`;
