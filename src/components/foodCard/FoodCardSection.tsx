import React, { useState } from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "styles/breakpoints";
import { GridWrapper, FlexWrapper } from "components";
import BlackButton from "components/buttons/BlackButton";

const MapFoodSection = [
  {
    restaurantCardTitle: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "burger",
    type: "Snack",
    display: "show",
    id: 1,
  },
  {
    restaurantCardTitle: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: "salmon",
    display: "show",
    type: "Fish",
    id: 2,
  },
  {
    restaurantCardTitle: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: "pancakes",
    display: "show",
    type: "Breakfast",
    id: 3,
  },
  {
    restaurantCardTitle: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: "healthy",
    display: "show",
    type: "Healthy",
    id: 4,
  },
  {
    restaurantCardTitle: "Chicken Meatballs with Cream Cheese",
    image: "meatballs",
    display: "",
    type: "Meat",
    id: 5,
  },
  {
    restaurantCardTitle: "null",
    image: "null",
    display: "",
    id: 99,
  },

  {
    restaurantCardTitle: "Fruity Pancake with Orange & Blueberry",
    image: "fruity",
    display: "",
    type: "Sweet",
    id: 5,
  },

  {
    restaurantCardTitle: "The Best Easy One Pot Chicken and Rice",
    image: "chickenpot",
    display: "",
    type: "Snack",
    id: 6,
  },
  {
    restaurantCardTitle: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: "pasta",
    display: "",
    type: "Noodles",
    id: 7,
  },
];

const FoodCardSection: React.FC = () => {
  const { isMobile, isTablet } = useQuery();

  const [show, setShow] = useState<boolean>(false);

  return (
    <GridWrapper
      gridTemplateColumns={isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr 1fr"}
      mx={isTablet ? "auto" : "s90"}
      width={"23rem"}
      gridGap={isTablet ? "10px" : "56px"}
    >
      {MapFoodSection.map(
        ({ restaurantCardTitle, image, id, display, type }) => (
          <FoodCard
            restaurantCardTitle={restaurantCardTitle}
            key={id}
            image={image}
            display={show && isMobile ? "show" : display}
            type={type}
          />
        )
      )}
      {isMobile ? (
        <FlexWrapper justifyContent="center">
          {show ? (
            <BlackButton onClick={() => setShow(!show)} title={"Show Less"} />
          ) : (
            <BlackButton onClick={() => setShow(!show)} title={"Show More"} />
          )}
        </FlexWrapper>
      ) : (
        ""
      )}
    </GridWrapper>
  );
};

export default FoodCardSection;
