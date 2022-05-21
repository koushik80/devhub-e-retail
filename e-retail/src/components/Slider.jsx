import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
     width: "100%"
     height: 100vh;
     display: flex;
     position: relative;
     overflow: hidden;
`

const Arrow = styled.div`
     

`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
         <ArrowLeftOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

