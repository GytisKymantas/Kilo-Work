import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";
import { Typography, Box, FlexWrapper } from "components";
import { Link } from "gatsby";
import { Facebook, Instagram, Twitter } from "assets/icons";
import { theme } from "styles/theme";

const Navigation: React.FC = () => {
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
      height={isTablet ? "18.75rem" : "6.875rem"}
      maxWidth={1440}
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      mb={"s40"}
      pl={isMobile ? "s0" : "auto"}
    >
      <FlexWrapper
        justifyContent={isMobile ? "center" : "space-around"}
        flexDirection={isTablet ? "column" : "row"}
        alignItems={"center"}
        gap={isTablet ? "20px" : ""}
        height={"100%"}
      >
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
          <Facebook />
          <Twitter />
          <Instagram />
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
  color: ${theme.colors.primary};
  list-style-type: none;
  text-decoration: none;
`;
