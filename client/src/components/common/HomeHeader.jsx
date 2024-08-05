import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/listCard.css";
import { Link } from "react-router-dom";

function HomeHeader({ firstProductSet }) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={1000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 2040,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {firstProductSet.map((product, index) => (
        // <Link to={`/product/${product.name}`}>
        <img
          src={product.image_url}
          alt=""
          style={{
            width: "120%",
            height: "500px",
          }}
        />
        // </Link>
      ))}
    </Carousel>
  );
}

export default HomeHeader;
