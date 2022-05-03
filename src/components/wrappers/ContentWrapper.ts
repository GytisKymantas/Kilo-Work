import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";
import { Box } from "./Box";

export const ContentWrapper = styled(Box)`
  text-align: ${({ textAlign }) => textAlign};
  margin: 0 auto;
  max-width: 58rem;
  padding: 0 1rem;

  @media ${tablet} {
    width: 100%;
  }
`;
