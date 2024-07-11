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
      <div className="home-header">
        <HomeHeader />
      </div>

      <div className="categories-container">
        {cardData.map((data, index) => (
          <HomeCategories
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            links={data.links}
            description={data.description}
          />
        ))}
      </div>

      <div className="list-container">
        <ListCards />
      </div>

      <div className="card-container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            links={data.links}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
