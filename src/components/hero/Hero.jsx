import { useState } from "react";
import { herolist } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute bottom-0 left-96 lg:left-1/2 slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute bottom-0 bg-white text-primary left-96 lg:left-[45.5%] slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="h-[50vh] lg:h-[90vh] mt-20  bg-white-100 relative z-1">
        <Slider {...settings}>
          {herolist.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              colors={item.color}
              image={item.image}
              prices={item.price}
            />
          ))}
        </Slider>
      </section>
      <Banner />
    </>
  );
};

export const HeroItem = ({ title, description, colors, image, prices }) => {
  const [selectorColor, setSelectorColor] = useState(colors[0].value);
  const [selectorPrice, setSelectorPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const menuSelectedPrice = prices.find((price) => price.color === color);

    setSelectorColor(color);
    setSelectorPrice(menuSelectedPrice);
  };

  return (
    <>
      <section className="content flex justify-between items-center lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:-32 lg:py-64">
          <Title
            level={1}
            className="leading-none font-medium md:text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>

          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>Prices</Caption>
              <div className="mt-3 ">
                <Title level={5}>${selectorPrice.value.toFixed(2)}</Title>
              </div>
            </div>

            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center justify-center gap-3 mt-5">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => handleColorClick(color.value)}
                    className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${
                      selectorColor === color.value ? "selected" : ""
                    } `}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="primary-btn uppercase">View details</button>
            <button className="secondary-btn uppercase">View shop</button>
          </div>
        </div>
        <div className="right bg-white p-5 w-1/2 h-full flex justify-center items-center relative z-50">
          <img src={image} alt="" className="h-[60vh] w-full object-contain " />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </>
  );
};

export const Banner = () => {
  return (
    <>
      <div className="py-20 container flex flex-col lg:flex-row items-center gap-5">
        <div>
          <BannerCard
            title="Wooden water bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product1-1.png "
          />
        </div>
        <div className="flex justify-between flex-col gap-8">
          <BannerCard
            title="Wooden water bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product2.png"
            className={true}
          />
          <BannerCard
            title="Wooden water bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product3.png"
            className={true}
          />
        </div>
      </div>
    </>
  );
};

export const BannerCard = ({ title, desc, cover, className, classSecond }) => {
  return (
    <>
      <div className="w full h full relative">
        <img src={cover} alt="" />
        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          } ${className && classSecond ? "left-0 lg:left-48 top-0 w-96" : ""}`}
        >
          <div>
            <Title level={2}>{title}</Title>
            <p className="text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <button className="secondary-btn flex justify-end">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

HeroItem.propTypes = {
  title: PropTypes.isRequired,
  description: PropTypes.isRequired,
  colors: PropTypes.isRequired,
  image: PropTypes.isRequired,
  prices: PropTypes.isRequired,
};
