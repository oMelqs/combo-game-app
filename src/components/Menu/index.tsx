import React from "react";
import Anchor from "../shared/Anchor";
import Button from "../shared/Button";

import { Container, Content } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <Content>
        <Button
          color={"purpleDark"}
          onClick={() => {
            window.location.href = "/SandBox";
          }}
        >
          Entrar
        </Button>
        <Button color={"purpleDark"}>Criar Sala</Button>
        <Anchor color={"purpleDark"}>Como jogar?</Anchor>
      </Content>
    </Container>
  );
};

export default Menu;
