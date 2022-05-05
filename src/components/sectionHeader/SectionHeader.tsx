import React from "react";
import { FlexWrapper, ContentWrapper, Typography } from "components";
import { useQuery } from "styles/breakpoints";

type SectionHeaderTypes = {
  header?: string;
  paragraph?: string;
  center?: boolean;
  headerOne?: boolean;
};

const SectionHeader: React.FC<SectionHeaderTypes> = ({
  header,
  paragraph,
  center,
  headerOne,
}) => {
  const { isMobile, isTablet } = useQuery();

  return (
    <ContentWrapper m={"auto"} mb={"s30"}>
      <FlexWrapper gap={"14px"} flexDirection="column">
        <Typography
          type={headerOne ? "h1" : "h2"}
          color="primary"
          textAlign={center ? "center" : undefined}
        >
          {header}
        </Typography>
        <Typography color={"gray"}>{paragraph}</Typography>
      </FlexWrapper>
    </ContentWrapper>
  );
};

export default SectionHeader;
