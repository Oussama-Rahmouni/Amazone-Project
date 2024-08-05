import Carousel from "react-multi-carousel";
import Image from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/listCard.css";

function UncontrolledExample() {
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
            max: 1800,
            min: 1000,
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
      <img
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="Descriptive Alt Text"
      />
      <img
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="Descriptive Alt Text"
      />
      <img
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="Descriptive Alt Text"
      />
    </Carousel>
  );
}

export default UncontrolledExample;
