import React from "react";
import "./styles/main.css";
import ProductCards from "../components/common/ProductCards";
import AllProductsCard from "../components/common/AllProductsCard";
import { useQuery } from "react-query";
import { getCategoryProducts } from "../services/productService";
import { useParams } from "react-router-dom";

const Products = () => {
  const { name } = useParams();
  const { loading, erros, data } = useQuery({
    queryKey: ["getCategoryProducts"],
    queryFn: () => {
      return getCategoryProducts(name);
    },
  });

  console.log("our data ", data);

  return (
    <div>
      {data?.map((item) => (
        <div>
          <div>
            <img
              className="w-52 h-64 object-contain"
              src={item.image_url}
              alt=""
            />
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
