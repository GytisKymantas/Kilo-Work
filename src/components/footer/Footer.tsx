import React from "react";
import {
  Image,
  Typography,
  FlexWrapper,
  Box,
  SectionWrapper,
} from "components";
import { useQuery } from "styles/breakpoints";
import { NavigationListItem } from "components/navigation/Navigation";
import { NavigationList } from "components/navigation/Navigation";

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
            <NavigationListItem to={"/home"}>Home</NavigationListItem>
            <NavigationListItem to={"/"}>Recipes</NavigationListItem>
            <NavigationListItem to={"/"}>Blog</NavigationListItem>
            <NavigationListItem to={"/"}>Contact</NavigationListItem>
            <NavigationListItem to={"/"}>About us</NavigationListItem>
          </NavigationList>
        </FlexWrapper>
        <Typography type={"span"} color="gray">
          Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
        </Typography>
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
        <Box width="100px" height="30px"></Box>
        <FlexWrapper gap="5px">
          <Typography type={"span"} color="primary">
            © 2020 Flowbase. Powered by{" "}
          </Typography>
          <Typography type={"span"} color="orange">
            Webflow
          </Typography>
        </FlexWrapper>
        <FlexWrapper gap={"40px"}>
          <Image src="facebook" />
          <Image src="twitter" />
          <Image src="instagram" />
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};

export default Footer;
