import React from "react";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Box } from "components/wrappers/Box";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components/typography/Typography";
import { NavigationList } from "components/navigation/Navigation";
import { Image } from "components/Image";
import { NavigationListItem } from "components/navigation/Navigation";
import { useQuery } from "styles/breakpoints";

const Footer = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Box mx={"s80"} pb={"s80"} borderBottom="1px solid #E5E5E5;">
        <FlexWrapper
          justifyContent="space-between"
          mb={"s20"}
          flexDirection={isTablet ? "column" : ""}
          alignItems={isTablet ? "center" : ""}
          gap={isTablet ? "20px" : ""}
        >
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
