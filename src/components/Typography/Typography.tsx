import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

interface TypographyProps {
  color?: keyof DefaultTheme["colors"];
  children: React.ReactNode;
}

export const TextPreset1 = styled.p<TypographyProps>`
  font-family: "Red Hat Display", sans-serif;
  font-size: 64px;
  font-weight: 900;
  line-height: 110%;
  letter-spacing: 0px;
  color: ${ ( { color, theme }) => color ? theme.colors[color] : theme.colors["slate-900"]};

  @media (max-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 480px) and (max-width: 800px) {
    font-size: 48px;
  }
`;

export const TextPreset2 = styled.p<TypographyProps>`
  font-family: "Red Hat Display", sans-serif;
  font-size: 40px;
  font-weight: 900;
  line-height: 110%;
  letter-spacing: 0px;
  color: ${ ( { color, theme }) => color ? theme.colors[color] : theme.colors["slate-900"]};

  @media (min-width: 480px) and (max-width: 800px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }

`;

export const TextPreset3 = styled.p<TypographyProps>`
  font-family: "Red Hat Display", sans-serif;
  font-size: 16px;
  font-weight: 900;
  line-height: 110%;
  letter-spacing: 4px;
  color: ${ ( { color, theme }) => color ? theme.colors[color] : theme.colors["slate-900"]};

    @media (min-width: 480px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TextPreset4 = styled.p<TypographyProps>`
  font-family: "Red Hat Display", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0px;
  color: ${ ( { color, theme }) => color ? theme.colors[color] : theme.colors["slate-900"]};

  
  @media (min-width: 480px) and (max-width: 800px) {
    font-size: 16px;
  }

`;

export const TextPreset5 = styled.p<TypographyProps>`
  font-family: "Red Hat Display", sans-serif;
  font-size: 16px;
  font-weight: 900;
  line-height: 150%;
  letter-spacing: 0px;
  color: ${ ( { color, theme }) => color ? theme.colors[color] : theme.colors["slate-900"]};
`;


