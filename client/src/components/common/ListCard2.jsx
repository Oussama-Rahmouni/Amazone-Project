import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../../assets/images/326adee0c0ab562d6d5b3ce0d4503ea8.jpg";
import two from "../../assets/images/932c2a313b6b2918bed848602105c032.jpg";
import three from "../../assets/images/Amazon_product_design.jpg";
import four from "../../assets/images/b13d18f1651e2fee857c869f7c4f047a.jpg";
import "../styles/listCard.css";

const ListCard2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
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
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={3}
      swipeable
    >
      <div className="listCards">
        <img src={one} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={two} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={three} alt=" " style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={four} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={one} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={two} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={three} alt=" " style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={four} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={one} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={two} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={three} alt=" " style={{ height: "330px", width: "250px" }} />
      </div>
      <div className="listCards">
        <img src={four} alt="" style={{ height: "330px", width: "250px" }} />
      </div>
    </Carousel>
  );
};

export default ListCard2;
