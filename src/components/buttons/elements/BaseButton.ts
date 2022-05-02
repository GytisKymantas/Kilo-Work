import styled from "styled-components/macro";
import {
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
} from "styled-system";
import { Theme } from "styles/theme";

const defaultButtonProps = compose(layout, space, color, border, flexbox);

export interface DefaultButtonProps
  extends SpaceProps<Theme>,
    ColorProps<Theme>,
    LayoutProps<Theme>,
    BorderProps<Theme>,
    FlexboxProps<Theme> {
  type?: "button" | "submit" | "reset";
  gap?: number;
  onClick?: () => void;
}

export type ButtonStyles = Pick<
  DefaultButtonProps,
  "margin" | "width" | "padding" | "gap"
>;

export const BaseButton = styled.button<ButtonStyles>`
  display: block;
  gap: ${({ gap }) => gap || 0};
  padding: "0.5rem 1rem";
  width: 100%;

  font-weight: ${({ theme }) => theme.fontWeights.fw700};

  && {
    ${defaultButtonProps}
  }
`;
