import React from 'react'
import Menu from './../common/Menu';
import styled from 'styled-components';

export default () => (
  <Container>
    <Menu></Menu>
    <Content>
      <AboutMe>Ofir Yaron, A Developer, Hobbyist, Photographer, Father, Blogger... </AboutMe>
    </Content>
  </Container>);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;
  //height: 100%;
  //background: url('images/bg.jpg');
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  //background-color: pink;
  background-size: contain;
  background: url(/images/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
`;

const AboutMe = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 3.5em;
  color: white;
  font-family: Avenir;
  padding: 100px;
  text-shadow: 2px 2px #040304;
  text-transform: uppercase;
`;
