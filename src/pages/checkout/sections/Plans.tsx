import React from "react";
import { SectionWrapper } from "components";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { Typography } from "components/typography/Typography";
import { PlanCard } from "../elements/PlanCard";
import { PLANS } from "constants/checkoutConstants";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components";

const Plans: React.FC = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography type={"h1"} color={"primary"} m="s16">
          Get a personalized program for you now!
        </Typography>
        <FlexWrapper>
          <Box>
            {PLANS.map(({ title, price, productKey }) => (
              <PlanCard
                // duration={duration}
                isSelected={true}
                productKey={productKey}
                price={price}
                title={title}
                key={productKey}
              />
            ))}
          </Box>
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Plans;
