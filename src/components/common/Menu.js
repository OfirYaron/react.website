import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

export default () => (
  <Container>
    <StartItem>
      <Logo/>
    </StartItem>
    <Links>
      <Item>Home</Item>
      <Item>Blog</Item>
      <Item>Gallery</Item>
      <Item>Say Hello</Item>
    </Links>
  </Container>);

const Container = styled.div`
  font-family: Avenir;
  font-size: 1.1em; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Links = styled.ul`
  font-family: Avenir;
  font-size: 1.1em; 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Item = styled.li`
  display: flex;
  color: white;
  list-style: none;
  margin: 0 20px;
  
  &:hover {
  color: gray; 
  opacity: 1; 
  cursor: pointer;
  }
`;

const StartItem = styled.div`
  display: flex;
  color: white;
  margin: 0 20px;
`;
