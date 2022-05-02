// export { default } from './home';
import GrayButton from "components/foodLabel/GrayButton";
import Navigation from "components/navigation/Navigation";
import UserAccount from "components/userAccount/UserAccount";
import BlackButton from "components/blackButton/BlackButton";
import SectionHeader from "components/sectionHeader/SectionHeader";
import Vegetables from "components/vegetablesSection/Vegetables";
import HeroSection from "components/heroSection/HeroSection";
import FoodCard from "components/foodCard/FoodCard";
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
    </>
    // <SectionHeader
    //   header={"Spicy delicious chicken wings"}
    //   paragraph={
    //     "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim  ipsum"
    //   }
    // />
  );
};

export default Landing;
