import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";
import { Styles } from "./Box";
import { Theme } from "styles/theme";

export const ContentWrapper = styled.section<Styles<Theme>>`
  margin: 0 auto;
  max-width: 46rem;
  padding: 0 1rem;

  @media ${tablet} {
    width: 100%;
  }
`;
