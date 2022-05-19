import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import '../App.css';

const Container = styled.div`
     height: 60px;
     background-color: black;
`
const Wrapper = styled.div`
     padding: 10px 20px;
`

const Navbar = () => {
  return (
      <Container>
          <Wrapper>navbar</Wrapper>
           <img src={logo} className="App-logo" alt="logo" />
      </Container>
      
  )
}

export default Navbar