import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "cyan-600": string;
      "cyan-300": string;
      "purple-600": string;
      "purple-300": string;
      "slate-900": string;
      "slate-600": string;
      "slate-300": string;
      white: string;
      "hover-cyan": string;
      "hover-purple": string;
    };
  }
}
