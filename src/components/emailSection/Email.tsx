import React from "react";
import SectionHeader from "components/sectionHeader/SectionHeader";
import BlackButton from "components/buttons/BlackButton";
import { useQuery } from "styles/breakpoints";
import { RectangleLong } from "../../assets/images/rectanglelong.png";
import styled from "styled-components/macro";

import { FlexWrapper, Input, Box, SectionWrapper } from "components";

const Email: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <SectionWrapper>
      <BackgroundBox py={"s80"} textAlign={"center"} bg={"teal"}>
        <Box>
          <FlexWrapper>
            <SectionHeader
              header={"Deliciousness to your inbox"}
              center
              paragraph={
                "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
              }
            />
          </FlexWrapper>
          <FlexWrapper justifyContent="center">
            <Box
              position={isMobile ? undefined : "relative"}
              width={isMobile ? "50%" : undefined}
            >
              <Box>
                <Input
                  p={"1.875rem"}
                  width={isMobile ? "12rem" : "30rem"}
                  height={"5rem"}
                  placeholder={"Your email adress..."}
                ></Input>
              </Box>
              <Box
                position={isMobile ? undefined : "absolute"}
                top={"10%"}
                right={"5%"}
              >
                <BlackButton title={"Subscribe"} isShort />
              </Box>
            </Box>
          </FlexWrapper>
        </Box>
      </BackgroundBox>
    </SectionWrapper>
  );
};

const BackgroundBox = styled(Box)`
  // does not work for some reason? had to use normal teal color as background
  background-image: url("../../assets/images/rectanglelong.png");
`;
export default Email;
