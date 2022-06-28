import React from "react";
import { Fragment } from "react";
import ChooseUs from "../Component/choose-us/ChooseUs";
import Download from "../Component/download-section/Download";
import Footer from "../Component/footer/Footer";
import Header from "../Component/Header/Header";
import HeroSlider from "../Component/hero-slider/HeroSlider";
import MenuPack from "../Component/menu-pack/MenuPack";
import PopularMenu from "../Component/popular-menu/PopularMenu";
import Testimonials from "../Component/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;