import React from "react";
import styled from "styled-components";

const Title = styled.title`
  font-weight: 1000;
  font-size: 4vh;
  line-height: 6vh;
  height: 6vh;
  margin: 0;
  padding: 2%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return (
    <header>
      <Title>GET REKT</Title>
    </header>
  );
};

export default Header;
