import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`

`;








const Login = () => {
    return (
        <Container>
         <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
         </Wrapper>
        </Container>
    );
};

export default Login;
