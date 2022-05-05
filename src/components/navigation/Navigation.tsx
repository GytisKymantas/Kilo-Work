import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";
import { Typography, Box, FlexWrapper, Image } from "components";
import { Link } from "gatsby";

const Navigation = () => {
  const { isMobile, isTablet } = useQuery();
  const mapedNavigationLinks = [
    "Home",
    "Recipes",
    "Blog",
    "Contact",
    "About us",
  ];
  return (
    <Box
      height={isTablet ? 300 : 110}
      maxWidth={1440}
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      mb={"s40"}
      pl={isMobile ? "s0" : "auto"}
    >
      <FlexWrapper
        justifyContent={isMobile ? "center" : "space-around"}
        flexDirection={isTablet ? "column" : "row"}
        // justifyContent={isMobile ? "center" : ""}
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
        <NavigationList>
          {mapedNavigationLinks.map((link) => (
            <NavigationListItem key={link} to={`/${link}`}>
              {link}
            </NavigationListItem>
          ))}
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

export const NavigationListItem = styled(Link)`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
`;
