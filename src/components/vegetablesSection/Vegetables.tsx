import React from "react";
import { Image, Typography, FlexWrapper, Box } from "components";
import { useQuery } from "styles/breakpoints";

const MapVeggies = ["rice", "cake", "chocolate", "meat", "sandwich", "veggie"];
const MapVeggiesMobile = ["rice", "cake", "chocolate"];

const Vegetables: React.FC = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <Box
      mx={isTablet ? "s50" : "s40"}
      mt={isTablet ? "s40" : "s0"}
      mb={isTablet ? "s40" : "s160"}
    >
      <Typography
        type="h3"
        color="primary"
        mb={"s80"}
        textAlign={isMobile ? "center" : undefined}
      >
        Categories
      </Typography>
      <FlexWrapper
        gap={"40px"}
        flexWrap="wrap"
        justifyContent={isMobile ? "center" : ""}
      >
        {isMobile
          ? MapVeggiesMobile.map((veggies: any) => <Image src={veggies} />)
          : MapVeggies.map((veggies: any) => <Image src={veggies} />)}
      </FlexWrapper>
    </Box>
  );
};

export default Vegetables;
