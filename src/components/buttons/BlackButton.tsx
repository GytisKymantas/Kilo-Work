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
      width={200}
      height={60}
      display="flex"
      border="none"
      alignItems="center"
      backgroundColor="primary"
      justifyContent="center"
      pl={"s20"}
      rad={isShort ? "15px" : "30px"}
      gap={"16px"}
      onClick={onClick}
    >
      {title}
      {title && <Image src={image} style={{ cursor: "pointer" }} />}
    </BaseButton>
  );
};

export default BlackButton;
