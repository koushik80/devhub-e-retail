import styled from 'styled-components';
import { mobile } from '../responsive';
import {  } from '@material-ui/icons';


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                  <Logo>devHuß</Logo>
            </Left>
            <Center></Center>
            <Right></Right>

        </Container>
    );
};

export default Footer;
