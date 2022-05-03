import React from "react";

import { Logo } from "assets/icons";
import { Box } from "components";

export const Banner = () => (
  <Box py={"s16"} as="header" textAlign="center">
    <Logo />
  </Box>
);
