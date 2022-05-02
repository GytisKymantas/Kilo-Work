import React from "react";
import { Box } from "components/wrappers/Box";
import { Typography } from "components/typography/Typography";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Image } from "components";
import styled from "styled-components/macro";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import GrayButton from "components/foodLabel/GrayButton";

type FoodCardTypes = {
  restaurantCardTitle: string | undefined;
  key?: number;
  image?: string | null;
};

const FoodCard: React.FC<FoodCardTypes> = ({ restaurantCardTitle, image }) => {
  return (
    <SectionWrapper maxWidth={"370px"}>
      {image === null ? (
        <Image src="advertisement" />
      ) : (
        <Box
          background={
            "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)"
          }
        >
          <MainImageContainer>
            <Image src={image} style={{ borderRadius: "30px" }} />
          </MainImageContainer>
          <HeartImageContainer
            height={48}
            width={48}
            bg="white"
            borderRadius={50}
            position="absolute"
            top="65px"
            right="20px"
            style={{ cursor: "pointer" }}
          >
            <HeartImage position="absolute" top="35%" left="25%">
              <Image src="heartred" />
            </HeartImage>
          </HeartImageContainer>
          <Typography type="h3" color="primary" mt={"s30"} ml={"s30"}>
            {restaurantCardTitle}
          </Typography>
          <FlexWrapper p={"s30"} mr={"s70"}>
            <GrayButton title={"30 Minutes"} image={"timewatch"} isGray />
            <GrayButton title={"Snack"} image={"forkknife"} isGray />
          </FlexWrapper>
        </Box>
      )}
    </SectionWrapper>
  );
};

export default FoodCard;

const MainImageContainer = styled(Box)``;
const HeartImageContainer = styled(Box)``;
const HeartImage = styled(Box)``;
