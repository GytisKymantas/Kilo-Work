import styled from "styled-components/macro";
import {tablet } from "styles/breakpoints";

interface ContainerStyles {
  minHeight?: string;
  maxHeight?: string;
}

export const Container = styled.div<ContainerStyles>`
  position: relative;
  padding: 64px;
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};

  @media ${tablet} {
    padding: 48px;
  }
`;
