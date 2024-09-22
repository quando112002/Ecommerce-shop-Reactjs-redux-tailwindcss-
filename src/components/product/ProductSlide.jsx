import { BodyOne, Title } from "../common/CustomComponents";
import { productlists } from "../../assets/data/data";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute top-[32%] -right-5 lg:-right-32 rounded-full slider-btn"
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
      className=" absolute top-[32%] -left-5 lg:-left-32 rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

const ProductSlice = () => {
  return (
    <>
      <section className="py-20 bg-white slideproduct">
        <div className="container">
          <Title level={4}>What is a trending now </Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">
              Discover the most trending products in moonscart
            </BodyOne>
          </div>
          <ProductSliceCard />
        </div>
      </section>
    </>
  );
};

export default ProductSlice;

export const ProductSliceCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          initalSlide :2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {productlists.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            description={product.description}
            color={product.color}
            discount={product.discount}
            featured={product.featured}
            images={product.images}
            price={product.price}
            rating={product.rating}
            title={product.title}
            category={product.category}
          />
        ))}
      </Slider>
    </>
  );
};
