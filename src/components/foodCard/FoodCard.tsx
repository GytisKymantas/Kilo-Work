import React, { useState } from "react";
import {
  Image,
  SectionWrapper,
  Typography,
  Box,
  FlexWrapper,
} from "components";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";
import GrayButton from "components/foodLabel/GrayButton";

type FoodCardTypes = {
  restaurantCardTitle: string | undefined;
  key?: number;
  src?: string;
  style?: string;
  image?: string;
  display?: string;
  type?: string;
};

const FoodCard: React.FC<FoodCardTypes> = ({
  restaurantCardTitle,
  image,
  display,
  type,
}) => {
  const [show, setShow] = useState(false);
  const { isMobile } = useQuery();

  return (
    <>
      {isMobile ? (
        <>
          {display === "show" ? (
            <SectionWrapper>
              <Box maxWidth={"400px"}>
                {image === "null" ? (
                  <Image src="advertisement" style={{ width: "100%" }} />
                ) : (
                  <Box
                    background={
                      "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)"
                    }
                  >
                    <MainImageContainer>
                      <Image
                        src={image}
                        borderRadius="30px"
                        style={{ width: "100%" }}
                      />
                    </MainImageContainer>
                    <Box
                      height={"3rem"}
                      width={"3rem"}
                      bg="white"
                      radius={"50%"}
                      position="absolute"
                      top="9%"
                      right="7%"
                      style={{ cursor: "pointer" }}
                    >
                      <HeartImage
                        position="absolute"
                        top="35%"
                        left="25%"
                        onClick={() => setShow(!show)}
                      >
                        {show ? (
                          <Image src="heartred" />
                        ) : (
                          <Image src="heartgray" />
                        )}
                      </HeartImage>
                    </Box>
                    <Typography type="h3" color="primary" mt={"s30"} ml={"s30"}>
                      {restaurantCardTitle}
                    </Typography>
                    <FlexWrapper p={"s30"} mr={"s70"}>
                      <GrayButton
                        title={"30 Minutes"}
                        image={"timewatch"}
                        isGray
                      />
                      <GrayButton title={type} image={"forkknife"} isGray />
                    </FlexWrapper>
                  </Box>
                )}
              </Box>
            </SectionWrapper>
          ) : null}
        </>
      ) : (
        <SectionWrapper maxWidth={"20rem"}>
          <Box width={"25rem"} maxHeight={"26.875rem"}>
            {image === "null" ? (
              <Image src="advertisement" style={{ width: "100%" }} />
            ) : (
              <Box
                background={
                  "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)"
                }
              >
                <MainImageContainer>
                  <Image
                    src={image}
                    borderRadius="30px"
                    style={{ width: "100%" }}
                  />
                </MainImageContainer>
                <Box
                  height={48}
                  width={48}
                  bg="white"
                  radius={"50%"}
                  position="absolute"
                  top="12%"
                  right="-14%"
                  style={{ cursor: "pointer" }}
                >
                  <HeartImage
                    position="absolute"
                    top="35%"
                    left="25%"
                    onClick={() => setShow(!show)}
                  >
                    {show ? (
                      <Image src="heartred" />
                    ) : (
                      <Image src="heartgray" />
                    )}
                  </HeartImage>
                </Box>
                <Typography type="h3" color="primary" mt={"s30"} ml={"s30"}>
                  {restaurantCardTitle}
                </Typography>
                <FlexWrapper p={"s30"} mr={"s70"}>
                  <GrayButton title={"30 Minutes"} image={"timewatch"} isGray />
                  <GrayButton title={type} image={"forkknife"} isGray />
                </FlexWrapper>
              </Box>
            )}
          </Box>
        </SectionWrapper>
      )}
    </>
  );
};

export default FoodCard;

const MainImageContainer = styled(Box)``;
const HeartImage = styled(Box)`
  border-radius: 50px;
`;
