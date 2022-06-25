import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../responsive';


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction : column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`

`;

const Input = styled.input`

`;

const Button = styled.button`

`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;