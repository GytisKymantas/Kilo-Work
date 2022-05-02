import React from "react";
import { Box } from "components/wrappers/Box";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";

import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Image } from "components";

const Navigation = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <Box
      height={isTablet ? 300 : 170}
      maxWidth={1440}
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
    >
      <FlexWrapper
        py={"s40"}
        justifyContent="space-around"
        flexDirection={isTablet ? "column" : "row"}
        alignItems={isTablet ? "center" : ""}
        gap={isTablet ? "20px" : ""}
      >
        {/* <Box p={"s40"}> */}
        <Box>
          <Typography type={"h2"} color={"primary"} fontFamily={"Lobster"}>
            Foodieland
            <Typography type={"span"} color={"orange"}>
              .
            </Typography>
          </Typography>
        </Box>
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
        {/* </Box> */}
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
