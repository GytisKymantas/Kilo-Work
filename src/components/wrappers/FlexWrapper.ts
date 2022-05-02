import styled from "styled-components/macro";
import { flexbox } from "styled-system";
import { Box } from "./Box";

interface FlexWrapperProps {
  alignItems?: string;
  alignContent?: string;
  justifyItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexDirection?: string;
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  justifySelf?: string;
  alignSelf?: string;
  order?: string;
  gap?: string;
}

export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  gap: ${({ gap }) => gap};
  && {
    ${flexbox}
  }
`;
