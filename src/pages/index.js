import Navigation from "components/navigation/Navigation";
import Vegetables from "components/vegetablesSection/Vegetables";
import HeroSection from "components/heroSection/HeroSection";
import FoodCardSection from "components/foodCard/FoodCardSection";
import KitchenChef from "components/kitchenChefSection/KitchenChef";
import Email from "components/emailSection/Email";
import Footer from "components/footer/Footer";
import React from "react";
import Home from "./home";

const Landing = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Vegetables />
      <FoodCardSection />
      <KitchenChef />
      <Email />
      <Footer />
      {/* <Home />
      <FoodCardSection /> */}
    </>
  );
};

export default Landing;
