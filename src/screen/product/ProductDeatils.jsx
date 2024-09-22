import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { ProductSliceCard } from "../../components/product/ProductSlide";
import { FilterDiscover } from "../../components/hero/InstagramPost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  const { description, color, discount, images, price, rating, title } =
    product;

  const [selectorColor, setSelectorColor] = useState(color[0].value);
  const [selectorPrice, setSelectorPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const menuSelectedPrice = price.find((price) => price.color === color);

    setSelectorColor(color);
    setSelectorPrice(menuSelectedPrice);
  };

  if (!product) {
    return <div>Product not Found</div>;
  }
  const CustomePage = ({ index, onClick }) => (
    <div>
      <img src={images[index].image} alt="" onClick={onClick} />
    </div>
  );

  const settings = {
    customPaging: (i) => <CustomePage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="images lg:w-1/2">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    src={image.image}
                    key={index}
                    alt=""
                    className="w-full h-full"
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-600">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-2">
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{product.rating} Review</p>
            </div>
            <p className="text-[13px]">{description}</p>
            <br />
            <div>
              <Caption>Color</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                      selectorColor === colorOption.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: colorsValue[colorOption.value] }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-5 ">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className="line-through mt-4">
                  ${selectorPrice.value}
                </BodyOne>
                <Title level={4} className="text-primary-green">
                  $
                  {(
                    selectorPrice.value -
                    (selectorPrice.value * product.discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiPlus size={20} />
              </button>
              <input
                type=""
                value="1"
                className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
              />
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiMinus size={20} />
              </button>
              <button className="primary-btn">ADD TO CART</button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 secondary-btn">
                Compare
              </button>
            </div>
            <hr className="my-5" />
            <label htmlFor="">
              <span className="text-primary font-bold">SKU: </span>PRT584E63A
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold">Category: </span>Baby
              Product
            </label>
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Fits Your child</Title>
            <Caption>
              Goods are items that are produced, bought, or sold to meet the
              needs and demands of consumers or businesses. They can include
              physical products like food, clothing, electronics, and machinery,
              as well as raw materials used in manufacturing. Goods are
              essential in trade and commerce, forming a significant part of the
              global economy. The quality, availability, and pricing of goods
              often influence consumer behavior and business decisions.
            </Caption>
            <Title level={3} className="mt-5">
              Specifications
            </Title>
            <div className="flex flex-col gap-3 mt-2">
              Goods are items that are produced, bought, or sold to meet the
              needs
              <Caption>And demands of consumers or businesses.</Caption>
              <Caption>
                Products like food, clothing, electronics, and machinery, as
                well as
              </Caption>
              <Caption>Raw materials used in manufacturing.</Caption>
              <Caption>And commerce, forming a significant part of the</Caption>
              <Caption>and pricing of goods often</Caption>
              <Caption>behavior and business decisions.</Caption>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
            <ProductDetailsBox title="" desc="" />
            <ProductDetailsBox title="" desc="" />
            <ProductDetailsBox title="" desc="" />
            <ProductDetailsBox title="" desc="" />
          </div>
        </div>
        <Title level={3} className="my-5">
          Related Product
        </Title>
        <ProductSliceCard />
      </section>
      <br />
      <FilterDiscover />
    </>
  );
};

export default ProductDetails;

export const ProductDetailsBox = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  );
};
