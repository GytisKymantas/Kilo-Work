import React from "react";
import { Box, GridWrapper, FlexWrapper, Image } from "components";
import { StaticImage } from "gatsby-plugin-image";
import SectionHeader from "components/sectionHeader/SectionHeader";
import GrayButton from "components/foodLabel/GrayButton";
import BlackButton from "components/buttons/BlackButton";
import UserAccount from "components/userAccount/UserAccount";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";

const HeroSection: React.FC = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <GridWrapper
      gridTemplateColumns={isTablet ? "1fr" : "1fr 1fr"}
      gridTemplateRows={"40rem"}
      mx={isTablet ? "s0" : "s90"}
      mb={isTablet ? "s0" : "s160"}
    >
      <Box position="relative">
        <StaticImage
          src="../../assets/images/rectangle.png"
          placeholder="tracedSVG"
          draggable="false"
          style={{
            height: "100%",
            width: "100%",
          }}
          alt="teal background"
        />
        <Box
          position="absolute"
          top="5%"
          right="-15%"
          zIndex={2}
          display={isTablet ? "none" : ""}
        >
          <Image src="badge" />
        </Box>
        <Box position="absolute" top="0">
          <GrayButtonContainer ml={50}>
            <GrayButton title={"Hot Recipes"} secondButton />
          </GrayButtonContainer>
          <Box ml={"s35"}>
            <SectionHeader
              headerOne
              header={"Spicy delicious chicken wings"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
              }
            />
          </Box>
          <FlexWrapper ml={"s50"} mb={isMobile ? "s20" : "s100"} gap={"16px"}>
            <GrayButton image={"timewatch"} title={"30 Minutes"} />
            <GrayButton image={"forkknife"} title={"Chicken"} />
          </FlexWrapper>
          <FlexWrapper
            ml={"s50"}
            mb={"s50"}
            gap={"50px"}
            flexWrap={isMobile ? "wrap" : undefined}
          >
            <UserAccount
              name={"John Smith"}
              dateOfPost={"15 March 2022"}
              image={"user"}
            />
            <BlackButton title={"View Recipes"} image={"play"} />
          </FlexWrapper>
        </Box>
      </Box>
      <Box>
        <StaticImage
          src="../../assets/images/hero.png"
          alt="hero"
          placeholder="tracedSVG"
          draggable="false"
          style={{
            height: "100%",
          }}
        />
      </Box>
    </GridWrapper>
  );
};

const BoxContainer = styled(Box)<any>`
  background-image: url("../../assets/images/rectangle.png");
  background-size: center;
`;
const GrayButtonContainer = styled(Box)<any>`
  margin: 40px 0 32px 40px;
`;

export default HeroSection;
