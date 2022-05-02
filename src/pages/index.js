import Navigation from "components/navigation/Navigation";
import Vegetables from "components/vegetablesSection/Vegetables";
import HeroSection from "components/heroSection/HeroSection";
import FoodCardSection from "components/foodCard/FoodCardSection";
import KitchenChef from "components/kitchenChefSection/KitchenChef";
import SectionHeader from "components/sectionHeader/SectionHeader";
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
      <SectionHeader
        header="Simple and tasty recipes"
        paragraph="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      />
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
