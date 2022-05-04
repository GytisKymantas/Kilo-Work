import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";
import { Typography, Box, FlexWrapper, Image } from "components";

const Navigation = () => {
  const { isTablet } = useQuery();

  return (
    <Box
      height={isTablet ? 300 : 110}
      maxWidth={1440}
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      mb={"s40"}
    >
      <FlexWrapper
        justifyContent="space-around"
        flexDirection={isTablet ? "column" : "row"}
        alignItems={"center"}
        gap={isTablet ? "20px" : ""}
      >
        {/* <Box> */}
        <Typography
          type={"h2"}
          color={"primary"}
          fontSize={"fs24"}
          fontFamily={"Lobster"}
        >
          Foodieland
          <Typography type={"span"} color={"orange"}>
            .
          </Typography>
        </Typography>
        {/* </Box> */}
        <NavigationList>
          <NavigationListItem>Home</NavigationListItem>
          <NavigationListItem>Recipes</NavigationListItem>
          <NavigationListItem>Blog</NavigationListItem>
          <NavigationListItem>Contact</NavigationListItem>
          <NavigationListItem>About us</NavigationListItem>
        </NavigationList>
        <FlexWrapper gap={"40px"} mt={isTablet ? "s40" : "s0"}>
          <Image src="facebook" />
          <Image src="twitter" />
          <Image src="instagram" />
        </FlexWrapper>
      </FlexWrapper>
    </Box>
  );
};

export default Navigation;

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;

export const NavigationListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
