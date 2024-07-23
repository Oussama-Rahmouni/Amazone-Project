import Carousel from "react-bootstrap/Carousel";

function HomeHeader({ firstProductSet }) {
  return (
    <Carousel className="categorie-card">
      {firstProductSet.map((product, index) => (
        <Carousel.Item key={index}>
          <img
            src={product.image_url}
            alt=""
            style={{ width: "100%", height: "77.5vh", padding: "5px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeHeader;
