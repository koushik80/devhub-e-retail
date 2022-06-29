import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Title = styled.h1`

`;




const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR ORDERS</Title>
            </Wrapper>
        </Container>
    );
};

export default Cart;
