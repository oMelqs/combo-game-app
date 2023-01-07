import React from "react";
import Anchor from "../shared/Anchor";
import Button from "../shared/Button";

import { Container, Content } from "./styles";

const handlePressEnter = () => {
  window.location.href = "/GamblingTable";
};

const Menu: React.FC = () => {
  return (
    <Container>
      <Content>
        <Button
          color={"purpleDark"}
          onClick={handlePressEnter}
          text={"Entrar"}
        />

        <Button color={"purpleDark"} text={"Criar Sala"} />
        <Anchor color={"purpleDark"}>Como jogar?</Anchor>
      </Content>
    </Container>
  );
};

export default Menu;
