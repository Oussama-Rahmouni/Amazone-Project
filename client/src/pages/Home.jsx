import React, { useEffect, useState } from "react";
import Card from "../components/common/Card.jsx";
// import "./styles/home.css";
import { useQuery } from "react-query";
import { cardData } from "./homeData.js";
import HomeHeader from "../components/common/HomeHeader.jsx";
import HomeCategories from "../components/common/HomeCategories.jsx";
import ListCards from "../components/common/ListCards.jsx";
import ListCard2 from "../components/common/ListCard2.jsx";
import TopHeader from "../components/common/TopHeader.jsx";
import { fetchIdsAndProducts, getCategories } from "../services/homeService.js";
import ProductsCards from "../components/common/ProductCards.jsx";
import FourthView from "./FourthView.jsx";

const Home = () => {
  const [fetchProducts, setFetchProducts] = useState(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const {
    data: products,
    isLoading: loadingProducts,
    error: errorsProducts,
  } = useQuery({
    queryKey: "getItemsIdsForHomePage",
    queryFn: fetchIdsAndProducts,
    enabled: fetchProducts,
    onSettled: () => setFetchProducts(false), // Reset to false after fetching
  });

  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorsCategories,
  } = useQuery({
    queryKey: "fetchCategories",
    queryFn: getCategories,
    enabled: fetchProducts,
    onSettled: () => setFetchProducts(false), // Reset to false after fetching
  });

  // Conditional rendering for loading and error states
  if (loadingProducts || loadingCategories) {
    return <div>Loading...</div>;
  }
  if (errorsProducts || errorsCategories) {
    return <div>Error happened</div>;
  }

  // Data extraction from fetched products
  const firstProductSet = products && products[0] ? products[0][0] : [];
  const secondProductSet = products && products[1] ? products[1][0] : [];
  const thirdProductSet = products && products[2] ? products[2][0] : [];
  const fourthProductSet = products && products[3] ? products[3][0] : [];
  const fifthProductSet = products && products[4] ? products[4][0] : [];
  const sixthProductSet = products && products[5] ? products[5][0] : [];

  return (
    <div className="bg-[#E3E6E6]">
      <div className="">
        <HomeHeader firstProductSet={firstProductSet} />
      </div>

      <div className="relative top-[144px] transform -translate-y-1/2  z-20 flex justify-center items-center gap-10 flex-wrap">
        <HomeCategories categories={categories} />
      </div>
      <div className="">jdid jdid jdid jdid </div>

      <div className="">
        <ListCards thirdProductSet={thirdProductSet} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 mt-10">
        <ProductsCards secondProductSet={secondProductSet} />
      </div>
      <div className="px-8 py-2 ">
        {/* <Card  /> */}
        <FourthView fourthProductSet={fourthProductSet} />
      </div>
      {/*

     

     


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
      */}
    </div>
  );
};

export default Home;
