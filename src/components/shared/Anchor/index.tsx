import React, { AnchorHTMLAttributes } from "react";

import { defaultTheme } from "@styles/themes";
import { A } from "./styles";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color: keyof typeof defaultTheme.colors;
}

const Anchor: React.FC<AnchorProps> = ({
  children,
  color = "pink",
  href = "#",
  ...rest
}) => {
  return (
    <A href={href} color={color} {...rest}>
      {children}
    </A>
  );
};
export default Anchor;
