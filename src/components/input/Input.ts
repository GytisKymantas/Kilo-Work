import styled from "styled-components/macro";
import React from "react";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  compose,
  position,
  PositionProps,
} from "styled-system";

const InputProps = compose(space, layout, position);

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface InputStyles
  extends React.InputHTMLAttributes<HTMLInputElement>,
    SpaceProps<any>,
    PositionProps<any> {
  min?: number;
  max?: number;
  placeholder?: string;
  type?: string;
  onChange?: (e: InputEvent) => void;
  label?: string;
  error?: string;
}

export const Input = styled.input<InputStyles>`
  display: grid;
  border-radius: 24px;
  && {
    ${InputProps}
  }
`;
