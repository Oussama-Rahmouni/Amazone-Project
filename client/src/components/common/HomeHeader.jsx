import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function HomeHeader({ firstProductSet }) {
  return (
    <Carousel className="categorie-card">
      {firstProductSet.map((product, index) => (
        <Carousel.Item key={index}>
          <Link to={`/product/${product.name}`}>
            <img
              src={product.image_url}
              alt=""
              style={{ width: "100%", height: "77.5vh", padding: "5px" }}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeHeader;
