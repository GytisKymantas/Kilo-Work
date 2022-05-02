import { TextType } from "./Typography";
import { css } from "styled-components/macro";
import { Theme } from "styles/theme";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        // returnninam visa css, nieko ko neatpazysta. Jokios ne funkcijos
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.fontSize};
      `;
  }
};
