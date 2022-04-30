import styled from "styled-components/macro";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { flexbox } from "styled-system";

export const FlexWrapper = styled.section<Styles<Theme>>`
  display: flex;

  && {
    ${flexbox}
  }
`;
