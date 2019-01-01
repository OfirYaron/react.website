import React, { Component } from 'react';
import styled from 'styled-components';
import Homepage from './components/pages/Homepage';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Homepage/>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  //display: flex;
  //flex-wrap: wrap;
`;
