import React from "react";
import { Box } from "components/wrappers/Box";
import { Image } from "components/Image";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

type GrayButtonType = {
  title: string;
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
      bg={
        secondButton ? "white" : isGray ? "transparent" : "rgba(0, 0, 0, 0.05)"
      }
      borderRadius={30}
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
        <Typography type="span" color="rgba(0, 0, 0, 0.06)">
          {title}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};

export default GrayButton;
