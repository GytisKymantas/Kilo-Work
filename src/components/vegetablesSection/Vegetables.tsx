import React from "react";
import { Box } from "components/wrappers/Box";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components/typography/Typography";
import { Image } from "components/Image";

const MapVeggies = ["rice", "cake", "chocolate", "meat", "sandwich", "veggie"];

const Vegetables = () => {
  return (
    <Box ml={"s40"} mr={"s40"}>
      <Typography type="h3" color="primary" mb={"s80"}>
        Categories
      </Typography>
      <FlexWrapper gap={"40px"}>
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
