import React from 'react';
import styled from 'styled-components';

const Art6 = ({size = 60}) => {
  return (
    <Container size={size}>
      <Letter size={size} className='highlight'>O</Letter>
      <Letter size={size}>f</Letter>
      <Letter size={size}>i</Letter>
      <Letter size={size}>r</Letter>
      <Letter size={size} className='highlight'>Y</Letter>
      <Letter size={size}>a</Letter>
      <Letter size={size}>r</Letter>
      <Letter size={size}>o</Letter>
      <Letter size={size}>n</Letter>
    </Container>
  );
};

export default Art6;

const Container = styled.div`
  font-size: ${({size}) => 0.011 * size}em;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border: 2px solid white;
`;

const Letter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: ${({size}) => size/3}px;
  width: ${({size}) => size/3}px;
  margin: auto;
  
  &.highlight {
  color: orange;
  }
`;
