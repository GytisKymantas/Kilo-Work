import React from "react";
import SectionHeader from "components/sectionHeader/SectionHeader";
import BlackButton from "components/buttons/BlackButton";
import { FlexWrapper, Input, Box, SectionWrapper, Image } from "components";
import { StaticImage } from "gatsby-plugin-image";

const Email = () => {
  return (
    <SectionWrapper position="relative">
      <Box height={"100%"} pt={"s80"} mx={"s80"} textAlign={"center"}>
        {/* <Box>
          <StaticImage
            src="../../assets/images/rectanglelong.png"
            placeholder="tracedSVG"
            draggable="false"
            alt="teal"
            style={{
              width: "100%",
            }}
          />
        </Box> */}
        <Box>
          <Image src="rectanglelong.png" />
        </Box>
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
