import React from "react";
import { Typography } from "components/typography/Typography";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

type SectionHeaderTypes = {
  header?: string;
  paragraph?: string;
};

const SectionHeader: React.FC<SectionHeaderTypes> = ({ header, paragraph }) => {
  return (
    <ContentWrapper m={"auto"} mb={"30px"}>
      <FlexWrapper gap={"14px"} flexDirection="column">
        <Typography type="h1" color="primary">
          {header}
        </Typography>
        <Typography color={"gray"}>{paragraph}</Typography>
      </FlexWrapper>
    </ContentWrapper>
  );
};

export default SectionHeader;
