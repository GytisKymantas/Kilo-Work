import React from "react";
import { BaseButton } from "components/buttons/elements/BaseButton";
import { Image } from "components/Image";

type BlackButtonTypes = {
  title: string;
  image?: string;
  isShort?: boolean;
  onClick?: () => void;
};

const BlackButton: React.FC<BlackButtonTypes> = ({
  title,
  image,
  isShort,
  onClick,
}) => {
  return (
    <BaseButton
      type="button"
      color="white"
      width={"12.5rem"}
      height={"3.75rem"}
      display="flex"
      border="none"
      alignItems="center"
      backgroundColor="primary"
      justifyContent="center"
      pl={"s20"}
      rad={isShort ? "0.9375rem" : "1.875rem"}
      gap={"16px"}
      onClick={onClick}
    >
      {title}
      {title && <Image src={image} style={{ cursor: "pointer" }} />}
    </BaseButton>
  );
};

export default BlackButton;
