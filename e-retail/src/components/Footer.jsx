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

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialIcon = styled.div`

`;
const SocialContainer = styled.div`
  display: flex;
`;

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
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon></SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>

        </Container>
    );
};

export default Footer;
