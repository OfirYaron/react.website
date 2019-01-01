import React from 'react';
import styled from 'styled-components';

const Art5 = () => {
  return (
    <Container>
      <div id='diamond'>
      </div>
      <div id='internal'>
      </div>
      <FirstLetter>Y</FirstLetter>
      <SecondLetter>O</SecondLetter>
      <Line></Line>
    </Container>
  );
};

export default Art5;

const Container = styled.div`
  //font-size: 2em;
    #diamond {
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-bottom-color: white;
      position: relative;
      top: -50px;
    }
    #diamond:after {
      content: '';
      position: absolute;
      left: -50px;
      top: 50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top-color: white;
    }
    #internal {
    width: 0;
    height: 0;
    border: 46px solid transparent;
    border-bottom-color: black;
    position: relative;
    top: -142px;
    left: 3px;
    }
    #internal:after {
      content: '';
      position: absolute;
      left: -45px;
      top: 46px;
      width: 0;
      height: 0;
      border: 46px solid transparent;
      border-top-color: black;
    }
`;

const FirstLetter = styled.div`
  top: -172px;
  left: 29px;
  position: relative;
  color: white;
`;

const SecondLetter = styled.div`
    top: -187px;
    left: 53px;
    position: relative;
    color: white;
`;

const Line = styled.div`
  width: 42px;
  height: 55px;
  border-bottom: 2px solid white;
  -webkit-transform: translateY(20px) translateX(20px) rotate(-45deg);
  position: relative;
  top: -282px;
  left: -10px
`;
