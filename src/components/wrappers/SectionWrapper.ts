import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { Colors } from "styles/theme";

interface SectionWrapperStyles {
  minHeight?: string;
  maxWidth?: string;
  backgroundColor?: Colors;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 3rem 0;
  min-height: ${({ minHeight }) => minHeight || ""};
  min-width: ${({ maxWidth }) => maxWidth || ""};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};

  @media ${mobile} {
    padding: 2rem 0;
  }
`;
