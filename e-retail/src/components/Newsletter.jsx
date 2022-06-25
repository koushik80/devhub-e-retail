import styled from 'styled-components';
import { Send } from '@material-ui/icons';


const Container = styled.div`

`;

const Title = styled.div`

`;

const Desc = styled.div`

`;

const InputContainer = styled.div`

`;

const Input = styled.div`

`;

const Button = styled.div`

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