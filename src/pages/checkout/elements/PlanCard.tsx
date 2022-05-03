import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components";
import { Product } from "typings/products";
import { theme } from "styles/theme";

interface PlanCardProps extends Product {
  isSelected: boolean;
}
// interface Product {
//     price:number;
//     finalPrice:number;
//     duration:number;
//     isSubscription?: boolean;
//     title?:string;
// }

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  isSelected,
  price,
}) => (
  <CardWrapper isSelected={isSelected}>
    <Box>
      <Typography type="body16">{title}</Typography>
      <Typography>{price}</Typography>
    </Box>
    <Box>Checkmark</Box>
    {/* {...props} */}
  </CardWrapper>
);

const CardWrapper = styled(FlexWrapper)<{ isSelected: boolean }>`
  border: ${({ isSelected }) =>
    isSelected ? `2px solid ${theme.colors.accent}` : ""};
`;
