import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/products.css";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/productService";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useQuery({
    queryKey: ["all products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return <div> data is loading ... wait a second</div>;
  }

  if (error) {
    return <div>a problem while getting all products</div>;
  }

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4 bg-[#E3E6E6] py-5">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30
        hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative
        flex flex-col gap-4"
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              category
            </span>
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                className="w-full h-[256px] object-contain"
                src={item.image_url}
                alt=""
              />
              <ul
                className="w-full h-36 bg-gray-100 absolute bottom-[-160px]
              flex flex-col items-end justify-center gap-2
            font-titleFont px-2 border-l border-r
            group-hover:bottom-0 duration-700"
              >
                <li className="productLi">
                  compare <LocalOfferIcon />
                </li>
                <li className="productLi">
                  View details <ArrowCircleRightIcon />
                </li>
                <li className="productLi">
                  Add to Cart <ShoppingCartCheckoutIcon />
                </li>
                <li className="productLi">
                  Add Favorite <ThumbUpOffAltIcon />
                </li>
              </ul>
            </div>
            <div className="px-4  z-10 bg-white">
              <div className="flex items-center justify-between ">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue">
                  {item.name.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  {item.price}
                </p>
              </div>
              <div className="text-sm">
                <p>{item.description.substring(0, 150)}...</p>
                <div className="text-yellow-500">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      id: item.id,
                      title: item.name,
                      description: item.description,
                      price: item.price,
                      image: item.image_url,
                    })
                  )
                }
                className="w-full font-titleFont font-medium text-base bg-gradient-to-tr
            from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 
            border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
            active:from-yellow-400 active:to-yellow-500 duration:200
            py-1.5 rounded-md mt-3"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
