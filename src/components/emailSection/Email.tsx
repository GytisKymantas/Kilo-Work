import React from "react";
import { Input } from "components/input/Input";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Box } from "components/wrappers/Box";
import SectionHeader from "components/sectionHeader/SectionHeader";
import BlackButton from "components/blackButton/BlackButton";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

const Email = () => {
  return (
    <SectionWrapper>
      <Box
        height={"442px"}
        bg="teal"
        pt={"s80"}
        m={"auto"}
        textAlign={"center"}
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
    </SectionWrapper>
  );
};

export default Email;
