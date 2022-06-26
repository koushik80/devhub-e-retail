import styled from 'styled-components';
import { mobile } from '../responsive';
import {
    Facebook,
    Instagram,
    Twitter,
    Pinterest
} from '@material-ui/icons';


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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>

        </Container>
    );
};

export default Footer;
