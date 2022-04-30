import styled from "styled-components/macro";
import React from "react";
import { Styles } from "../wrappers/Box";

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface InputStyles extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  placeholder?: string;
  type?: string;
  onChange?: (e: InputEvent) => void;
  label?: string;
  error?: string;
}

export const Input = styled.input<Styles<InputStyles>>`
  display: grid;
`;
