import React, { useEffect } from "react";
import Title from "./Title.styled";

const Header: React.FC = () => {
  useEffect(() => {
    console.log("Home");
  }, []);
  return (
    <header>
      <Title>GET REKT</Title>
    </header>
  );
};

export default Header;
