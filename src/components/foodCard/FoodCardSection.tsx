import React from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "styles/breakpoints";
import { GridWrapper } from "components/wrappers/GridWrapper";

const MapFoodSection = [
  {
    restaurantCardTitle: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "burger",
    id: 1,
  },
  {
    restaurantCardTitle: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: "salmon",
    id: 2,
  },
  {
    restaurantCardTitle: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: "pancakes",
    id: 3,
  },
  {
    restaurantCardTitle: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: "healthy",
    id: 4,
  },
  {
    restaurantCardTitle: "Chicken Meatballs with Cream Cheese",
    image: "meatballs",
    id: 5,
  },
  {
    image: "null",
    restaurantCardTitle: "null",
    id: 99,
  },

  {
    restaurantCardTitle: "Fruity Pancake with Orange & Blueberry",
    image: "fruity",
    id: 5,
  },

  {
    restaurantCardTitle: "The Best Easy One Pot Chicken and Rice",
    image: "chickenpot",
    id: 6,
  },
  {
    restaurantCardTitle: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: "pasta",
    id: 7,
  },
];

const FoodCardSection = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <GridWrapper
      gridTemplateColumns={isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr 1fr"}
      mx={isTablet ? "auto" : "s90"}
      width={"368px"}
      gridGap={isTablet ? "10px" : "56px"}
    >
      {MapFoodSection.map(({ restaurantCardTitle, image, id }) => (
        <FoodCard
          restaurantCardTitle={restaurantCardTitle}
          key={id}
          image={image}
        />
      ))}
    </GridWrapper>
  );
};

export default FoodCardSection;
