import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';

const Info = styled.div`

`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }

`;
const Image = styled.img`
  height: 75%;
  z-index: 2;

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
      <Image src={ item.img } />
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
