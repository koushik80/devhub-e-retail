import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';

const Info = styled.div`

`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  display: flex;


`;
const Image = styled.img`

`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;


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
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>

    </Container>
  )
}

export default Product
