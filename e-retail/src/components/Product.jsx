import styled from 'styled-components';


const Info = styled.div`

`;
const Container = styled.div`


`;
const Image = styled.img`

`;
const Circle = styled.div`

`;

const Icon = styled.div`

`

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </Info>

    </Container>
  )
}

export default Product
