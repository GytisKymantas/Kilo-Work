import styled from "styled-components/macro";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { grid } from "styled-system";

export const GridWrapper = styled.section<Styles<Theme>>`
  display: grid;

  && {
    ${grid}
  }
`;
