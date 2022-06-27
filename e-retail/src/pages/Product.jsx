import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter'

const Container = styled.div``;

const Wrapper = styled.div``;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`

`;

const InfoContainer = styled.div`

`;

const Title = styled.h1`

`;

const Desc = styled.p`

`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
               <ImgContainer>
                  <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
               </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc></Desc>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
