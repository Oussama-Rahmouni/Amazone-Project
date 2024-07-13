import React, { useEffect } from "react";
import {
  getBackgroundImages,
  getCategories,
  getFeaturedProducts,
} from "../services/homeService.js";
import Card from "../components/common/Card.jsx";
import "./styles/home.css";
import { useQuery } from "react-query";
import { cardData } from "./homeData.js";
import HomeHeader from "../components/common/HomeHeader.jsx";
import HomeCategories from "../components/common/HomeCategories.jsx";
import ListCards from "../components/common/ListCards.jsx";
import ListCard2 from "../components/common/ListCard2.jsx";
import GoUp from "../components/common/GoUp.jsx";
import TopHeader from "../components/common/TopHeader.jsx";

const Home = () => {
  // const {
  //   data: backgroundImages,
  //   error: bgImagesError,
  //   isLoading: bgImagesLoading,
  // } = useQuery(["backgroundImages"], getBackgroundImages);

  // const {
  //   data: categories,
  //   error: categoriesError,
  //   isLoading: categoriesLoading,
  // } = useQuery(["categories"], getCategories);

  // const {
  //   data: featuredProducts,
  //   error: featuredProductsError,
  //   isLoading: featuredProductsLoading,
  // } = useQuery(["featuredProducts"], getFeaturedProducts);

  // if (bgImagesLoading || categoriesLoading || featuredProductsLoading)
  //   return <div>Loading...</div>;

  // if (bgImagesError || categoriesError || featuredProductsError)
  //   return <div>An error occurred</div>;*

  return (
    <div className="home-page">
      <div className="tophead">
        <TopHeader />
      </div>

      <div className="home-header">
        <HomeHeader />
      </div>

      {/* <div className="categories-container">
        <HomeCategories />
      </div> */}

      <div className="firstContainer">
        {cardData.map((data, index) => (
          <HomeCategories
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            links={data.links}
            description={data.description}
          />
        ))}{" "}
      </div>

      <div className="list-container">
        <ListCards />
      </div>

      {/* <div className="card-container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            links={data.links}
            description={data.description}
          />
        ))}
      </div> */}

      <div className="firstContainer">
        {cardData.map((data, index) => (
          <HomeCategories
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            links={data.links}
            description={data.description}
          />
        ))}{" "}
      </div>

      <div className="list-container2">
        <ListCard2 />
      </div>

      <div>
        <GoUp />
      </div>
    </div>
  );
};

export default Home;
