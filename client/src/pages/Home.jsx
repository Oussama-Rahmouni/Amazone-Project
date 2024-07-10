import React, { useEffect } from "react";
import {
  getBackgroundImages,
  getCategories,
  getFeaturedProducts,
} from "../services/homeService.js";
import Card from "../components/common/Card.jsx";
import "./styles/home.css";
import { useQuery } from "react-query";

const Home = () => {
  const {
    data: backgroundImages,
    error: bgImagesError,
    isLoading: bgImagesLoading,
  } = useQuery(["backgroundImages"], getBackgroundImages);

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery(["categories"], getCategories);

  const {
    data: featuredProducts,
    error: featuredProductsError,
    isLoading: featuredProductsLoading,
  } = useQuery(["featuredProducts"], getFeaturedProducts);

  if (bgImagesLoading || categoriesLoading || featuredProductsLoading)
    return <div>Loading...</div>;

  if (bgImagesError || categoriesError || featuredProductsError)
    return <div>An error occurred</div>;

  return (
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
  );
};

export default Home;
