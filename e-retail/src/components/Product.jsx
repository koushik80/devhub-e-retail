import styled from 'styled-components';
import { ShoppingCartOutlined } from '@material-ui/icons';

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
        <Icon>
           <ShoppingCartOutlined />
        </Icon>
        <Icon></Icon>
        <Icon></Icon>
      </Info>

    </Container>
  )
}

export default Product
