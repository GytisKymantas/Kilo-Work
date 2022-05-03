import React from "react";
import { Typography } from "components/typography/Typography";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { useQuery } from "styles/breakpoints";

type SectionHeaderTypes = {
  header?: string;
  paragraph?: string;
  center?: boolean;
};

const SectionHeader: React.FC<SectionHeaderTypes> = ({
  header,
  paragraph,
  center,
}) => {
  const { isTablet } = useQuery();

  return (
    <ContentWrapper m={"auto"} mb={"s30"}>
      <FlexWrapper
        gap={"14px"}
        flexDirection="column"
        alignItems={center ? "center" : ""}
      >
        <Typography
          type="h1"
          color="primary"
          fontSize={isTablet ? "fs32" : "fs48"}
        >
          {header}
        </Typography>
        <Typography fontSize={"fs16"} color={"gray"}>
          {paragraph}
        </Typography>
      </FlexWrapper>
    </ContentWrapper>
  );
};

export default SectionHeader;
