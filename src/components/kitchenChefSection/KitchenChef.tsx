import React from "react";
import { useQuery } from "styles/breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import { Box, GridWrapper, SectionWrapper } from "components";
import SectionHeader from "components/sectionHeader/SectionHeader";
import BlackButton from "components/buttons/BlackButton";

const KitchenChef = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <GridWrapper gridTemplateColumns={isTablet ? "1fr" : "1fr 1fr"}>
        <Box>
          <SectionHeader
            header={"Everyone can be a chef in their own kitchen"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            }
          />
          <Box ml={"s70"}>
            <BlackButton title={"Learn More"} />
          </Box>
        </Box>
        <Box>
          <StaticImage
            src="../../assets/images/chef.png"
            alt="hero"
            placeholder="tracedSVG"
            draggable="false"
            style={{
              height: "100%",
            }}
          />
        </Box>
      </GridWrapper>
    </SectionWrapper>
  );
};

export default KitchenChef;
