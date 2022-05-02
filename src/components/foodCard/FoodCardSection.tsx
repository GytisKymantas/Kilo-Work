import React from "react";
import FoodCard from "./FoodCard";
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
    image: null,

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
  return (
    <GridWrapper
      gridTemplateColumns={"1fr 1fr 1fr "}
      m={"s90"}
      width={"368px"}
      gridGap={"56px"}
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
