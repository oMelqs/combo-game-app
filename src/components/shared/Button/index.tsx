import React, { ButtonHTMLAttributes } from "react";

import { defaultTheme } from "@styles/themes";
import { Container, Loading } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  color: keyof typeof defaultTheme.colors;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "pink",
  type = "button",
  loading = false,
  text,
  ...rest
}) => {
  return (
    <Container disabled={loading} color={color} type={type} {...rest}>
      {loading ? <Loading>dog</Loading> : text}
    </Container>
  );
};
export default Button;
