import React from "react";
import SectionHeader from "components/sectionHeader/SectionHeader";
import BlackButton from "components/buttons/BlackButton";
import { useQuery } from "styles/breakpoints";

import { FlexWrapper, Input, Box, SectionWrapper, Image } from "components";

const Email: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <SectionWrapper>
      <Box height={"100%"} pt={"s80"} textAlign={"center"}>
        <Box position="relative">
          <Image src="rectanglelong" />
        </Box>
        <Box
          position="absolute"
          top={isMobile ? "25%" : "35%"}
          left={"15%"}
          zIndex={2}
        >
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
            <Box position="relative">
              <Box>
                <Input
                  p={"30px"}
                  width={"480px"}
                  height={"80px"}
                  placeholder={"Your email adress..."}
                ></Input>
              </Box>
              <Box position={"absolute"} top={"10%"} right={"5%"}>
                <BlackButton title={"Subscribe"} isShort />
              </Box>
            </Box>
          </FlexWrapper>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Email;
