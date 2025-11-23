import React, { useState } from "react";
import type { DefaultTheme } from "styled-components/dist/types";
import { theme } from "../theme/theme";

interface ButtonProps {
  background: keyof DefaultTheme["colors"];
  hoverBackground: keyof DefaultTheme["colors"];
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  background,
  hoverBackground,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentBackgroundColor = isHovered
    ? theme.colors[hoverBackground]
    : theme.colors[background];
  return (
    <button
      style={{
        border: "none",
        borderRadius: "30px",
        padding: "16px 40px",
        backgroundColor: currentBackgroundColor,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
