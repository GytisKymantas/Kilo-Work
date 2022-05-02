import React from "react";
import { GridWrapper } from "components/wrappers/GridWrapper";
import { Box } from "components/wrappers/Box";
import { StaticImage } from "gatsby-plugin-image";
import SectionHeader from "components/sectionHeader/SectionHeader";
import GrayButton from "components/foodLabel/GrayButton";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import BlackButton from "components/blackButton/BlackButton";
import UserAccount from "components/userAccount/UserAccount";
import styled from "styled-components/macro";

const HeroSection = () => {
  return (
    <GridWrapper
      gridTemplateColumns={"1fr 1fr"}
      gridTemplateRows={"640px"}
      m={"s90"}
    >
      <Box
        bg="teal"
        backgroundImage={"url('../../assets/images/rectangle.png')"}
      >
        <GrayButtonContainer ml={50}>
          <GrayButton title={"Hot Recipes"} secondButton />
        </GrayButtonContainer>
        <Box ml={"35px"}>
          <SectionHeader
            header={"Spicy delicious chicken wings"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
            }
          />
        </Box>
        <FlexWrapper ml={"s50"} mb={"s100"} gap={"16px"}>
          <GrayButton image={"timewatch"} title={"30 Minutes"} />
          <GrayButton image={"forkknife"} title={"Chicken"} />
        </FlexWrapper>
        <FlexWrapper ml={"s50"} mb={"s50"} gap={"50px"}>
          <UserAccount
            name={"John Smith"}
            dateOfPost={"15 March 2022"}
            image={"user"}
          />
          <BlackButton title={"View Recipes"} image={"play"} />
        </FlexWrapper>
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
// backgroundImage = "url('../../assets/images/rectangle.png')";
