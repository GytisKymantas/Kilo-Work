import React from "react";
import { Box, Image, Typography, FlexWrapper } from "components";

type GrayButtonType = {
  title?: string;
  image?: string;
  secondButton?: boolean;
  isGray?: boolean;
};

const GrayButton: React.FC<GrayButtonType> = ({
  title,
  image,
  secondButton,
  isGray,
}) => {
  return (
    <Box
      bg={secondButton ? "white" : isGray ? "transparent" : "grayTwo"}
      borderRadius={"br30"}
      width={156}
      height={40}
      opacity={5}
    >
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        gap={"14px"}
        height="100%"
      >
        <Image src={image} />
        {secondButton && (
          <FlexWrapper>
            <Image src="scroll" />
          </FlexWrapper>
        )}
        <Typography type="body16" color="gray">
          {title}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};

export default GrayButton;
