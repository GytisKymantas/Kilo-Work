import React from "react";
import { Box } from "components/wrappers/Box";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components/typography/Typography";
import { Image } from "components/Image";
import { useQuery } from "styles/breakpoints";

const MapVeggies = ["rice", "cake", "chocolate", "meat", "sandwich", "veggie"];

const Vegetables = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <Box
      ml={isTablet ? "s50" : "s40"}
      mr={isTablet ? "s50" : "s40"}
      mt={isTablet ? "s40" : "s0"}
    >
      <Typography type="h3" color="primary" mb={"s80"}>
        Categories
      </Typography>
      <FlexWrapper gap={"40px"} flexWrap="wrap">
        {MapVeggies.map((veggies: any) => (
          <Image src={veggies} />
        ))}
      </FlexWrapper>
    </Box>
  );
};

export default Vegetables;
{
  /* <Image src={veggies} />; */
}
