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
     width: 50px;
     height: 50px;
     background-color: #f9f9f9;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;


`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

