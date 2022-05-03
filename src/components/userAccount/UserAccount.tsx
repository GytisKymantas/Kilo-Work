import React from "react";
import { Image } from "components/Image";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components/wrappers/Box";
import { Typography } from "components/typography/Typography";
import styled from "styled-components/macro";

type UserAccountType = {
  name?: string;
  dateOfPost?: string;
  image: string;
};

const UserAccount: React.FC<UserAccountType> = ({
  name,
  dateOfPost,
  image,
}) => {
  return (
    <Box>
      <FlexWrapper gap={"16px"}>
        <Image src={image} />
        <FlexWrapper flexDirection="column" justifyContent="space-around">
          <Typography type={"span"} color="primary" fontWeight="fw700">
            {name}
          </Typography>
          <Typography type={"span"} color="gray">
            {dateOfPost}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </Box>
  );
};

export default UserAccount;
