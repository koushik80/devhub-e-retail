import styled from 'styled-components';



const Container = styled.div`

`;

const Wrapper = styled.div`


`;

const Title = styled.h1`

`;

const Form = styled.form`

`;

const Input = styled.form`

`;



const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                </Form>
           </Wrapper>
        </Container>
    );
};

export default Register;
