import styled from "styled-components/macro";
import { Theme } from "styles/theme";
// import { Box } from "components/wrappers/Box";
import { tablet } from "styles/breakpoints";
import {
  compose,
  position,
  PositionProps,
  color,
  ColorProps,
} from "styled-system";

const containerProps = compose(position, color);

interface ContainerStyles<T> extends PositionProps<T>, ColorProps<T> {}

export const Container = styled.div<ContainerStyles<Theme>>`
  margin: 0 auto;
  max-width: 72rem;
  padding: 0 1rem;

  @media ${tablet} {
    max-width: 72rem;
  }

  && {
    ${containerProps}
  }
`;
