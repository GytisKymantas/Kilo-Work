import React, { useState } from "react";
import {
  Image,
  SectionWrapper,
  Typography,
  Box,
  FlexWrapper,
} from "components";
import styled from "styled-components/macro";
import GrayButton from "components/foodLabel/GrayButton";
import { display } from "styled-system";

type FoodCardTypes = {
  restaurantCardTitle: string | undefined;
  key?: number;
  src?: string;
  style?: string;
  image?: string;
  display?: string;
};

const FoodCard: React.FC<FoodCardTypes> = ({
  restaurantCardTitle,
  image,
  display,
}) => {
  // const food = "salmon" & "burger";
  return (
    // <Box display={mobileHidden ? "none" : ""}>
    <>
      {display === "show" ? (
        <SectionWrapper maxWidth={"370px"}>
          <Box>
            {image === "null" ? (
              <Image src="advertisement" />
            ) : (
              <Box
                background={
                  "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)"
                }
              >
                <MainImageContainer>
                  <Image src={image} borderRadius="30px" />
                </MainImageContainer>
                <Box
                  height={48}
                  width={48}
                  bg="white"
                  radius="50%"
                  position="absolute"
                  top="65px"
                  right="20px"
                  style={{ cursor: "pointer" }}
                >
                  <HeartImage position="absolute" top="35%" left="25%">
                    <Image src="heartred" />
                  </HeartImage>
                </Box>
                <Typography type="h3" color="primary" mt={"s30"} ml={"s30"}>
                  {restaurantCardTitle}
                </Typography>
                <FlexWrapper p={"s30"} mr={"s70"}>
                  <GrayButton title={"30 Minutes"} image={"timewatch"} isGray />
                  <GrayButton title={"Snack"} image={"forkknife"} isGray />
                </FlexWrapper>
              </Box>
            )}
          </Box>
        </SectionWrapper>
      ) : null}
    </>
  );
};

export default FoodCard;

const MainImageContainer = styled(Box)``;
const HeartImage = styled(Box)`
  border-radius: 50px;
`;
