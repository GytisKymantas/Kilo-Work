import React from "react";
import { Typography, FlexWrapper, Box, SectionWrapper } from "components";
import { useQuery } from "styles/breakpoints";
import { NavigationListItem } from "components/navigation/Navigation";
import { NavigationList } from "components/navigation/Navigation";
import { SocialsWrapper } from "components/navigation/Navigation";
import { Facebook, Instagram, Twitter } from "assets/icons";

const mapedNavigationLinks = ["Home", "Recipes", "Blog", "Contact", "About us"];

const Footer: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Box mx={"s80"} pb={"s80"} borderBottom="1px solid #E5E5E5;">
        <FlexWrapper
          justifyContent="space-between"
          flexDirection={isTablet ? "column" : ""}
          alignItems={"center"}
          gap={isTablet ? "20px" : ""}
        >
          <Box>
            <Typography
              type={"h2"}
              fontSize={"fs24"}
              color={"primary"}
              fontFamily={"Lobster"}
            >
              Foodieland
              <Typography type={"span"} color={"orange"}>
                .
              </Typography>
            </Typography>
          </Box>
          <NavigationList>
            {mapedNavigationLinks.map((link) => (
              <NavigationListItem to={`/${link}`}>{link}</NavigationListItem>
            ))}
          </NavigationList>
        </FlexWrapper>
        <Box mt={isMobile ? "s80" : undefined}>
          <Typography type={"span"} color="gray">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </Typography>
        </Box>
      </Box>
      <FlexWrapper
        mt={isTablet ? "s20" : "s50"}
        textAlign="center"
        display="flex"
        justifyContent="space-around"
        flexDirection={isTablet ? "column" : ""}
        alignItems={isTablet ? "center" : ""}
        gap={isTablet ? "20px" : ""}
      >
        <Box width="6.25rem" height="1.875rem"></Box>
        <FlexWrapper gap="5px">
          <Typography type={"span"} color="primary">
            © 2020 Flowbase. Powered by{" "}
          </Typography>
          <Typography type={"span"} color="orange">
            Webflow
          </Typography>
        </FlexWrapper>
        <SocialsWrapper mt={isTablet ? "s40" : "s0"}>
          <Facebook />
          <Twitter />
          <Instagram />
        </SocialsWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};

export default Footer;
