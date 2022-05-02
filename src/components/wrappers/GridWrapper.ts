import styled from "styled-components/macro";
import { Styles } from "./Box";
import { grid, GridProps, space, SpaceProps, compose } from "styled-system";
import { Box } from "./Box";

const gridProps = compose(space, grid);

interface GridWrapperProps extends GridProps<any>, SpaceProps<any> {}

export const GridWrapper = styled(Box)<GridWrapperProps>`
  display: grid;

  && {
    ${gridProps}
  }
`;
