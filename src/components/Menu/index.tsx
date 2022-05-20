import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <div>
        <Button>Jogar</Button>
      </div>
      <div>
        <Button>Como jogar</Button>
      </div>
    </Container>
  );
};

export default Menu;
