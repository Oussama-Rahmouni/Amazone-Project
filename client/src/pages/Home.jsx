import React, { useEffect } from "react";
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
import { fetchIdsAndProducts, getCategories } from "../services/homeService.js";

const Home = () => {
  const {
    data: products,
    loading,
    erros,
  } = useQuery({
    queryKey: "getItemsIdsForHomePage",
    queryFn: fetchIdsAndProducts,
  });

  const { data: categories } = useQuery({
    queryKey: "fetchCategories",
    queryFn: getCategories,
  });

  if (loading) {
    return <div>Loading</div>;
  }
  if (erros) {
    return <div>Error happend</div>;
  }

  const firstProductSet = products && products[0] ? products[0][0] : [];
  const secondProductSet = products && products[1] ? products[1][0] : [];
  const thirdProductSet = products && products[2] ? products[2][0] : [];
  const fourthProductSet = products && products[3] ? products[3][0] : [];
  const fifthProductSet = products && products[4] ? products[4][0] : [];
  const sixthProductSet = products && products[5] ? products[5][0] : [];

  console.log("first data ", firstProductSet);

  return (
    <div className="home-page">
      <div className="tophead">
        <TopHeader />
      </div>

      <div className="home-header">
        <HomeHeader firstProductSet={firstProductSet} />
      </div>

      <div className="categories-container">
        <HomeCategories />
      </div>

      <div className="firstContainer">
        {secondProductSet.map((data, index) => (
          <HomeCategories
            key={index}
            title={data.name}
            imageUrl={data.image_url}
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
