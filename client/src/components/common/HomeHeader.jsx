import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/images/carousel1.jpg";
import carouse from "../../assets/images/carousel.jpg";
import carouse2 from "../../assets/images/carousel2.jpg";
import "../styles/homeCarousel.css";

function HomeHeader({ firstProductSet }) {
  console.log(firstProductSet);
  return (
    <Carousel>
      {firstProductSet.map((product) => (
        <Carousel.Item>
          <img
            src={product.image_url}
            alt=""
            style={{ width: "100%", height: "80vh", padding: "5px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeHeader;
