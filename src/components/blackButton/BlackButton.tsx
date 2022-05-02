import React from "react";
import { BaseButton } from "components/buttons/elements/BaseButton";
import { Image } from "components/Image";

type BlackButtonTypes = {
  title: string;
  image?: string;
  isShort?: boolean;
};

const BlackButton: React.FC<BlackButtonTypes> = ({ title, image, isShort }) => {
  return (
    <BaseButton
      type="button"
      bg="primary"
      color="white"
      width={200}
      height={60}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pl={"20px"}
      borderRadius={isShort ? "15px" : "30px"}
      gap={"17px"}
    >
      {title}
      {title && <Image src={image} style={{ cursor: "pointer" }} />}
    </BaseButton>
  );
};

export default BlackButton;
