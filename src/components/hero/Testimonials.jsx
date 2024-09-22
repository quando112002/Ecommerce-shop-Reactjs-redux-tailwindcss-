import { BodyOne, Title } from "../common/CustomComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute bottom-0 right-0 bg-white text-primary rounded-full slider-btn z-10"
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
      className="absolute bottom-0 right-20 bg-white text-primary rounded-full slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="testimonials">
        <div className="container h-full flex items-center justify-center">
          <div className="w-1/2 flex relative z-50">
            <div className="box w-[270px] h-[270px]  bg-white rounded-full z-50">
              <img
                src="../images/hero/girl.png"
                alt=""
                className=" h-[400px] absolute -top-[70px] left-0 z-10 rounded-b-full"
              />
            </div>
            <div className="bg-[rbga(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-20 right-20 z-50">
              <BodyOne className="leading-none">Our Satisfiled User</BodyOne>
              <div className="flex items-center ">
                <img
                  src="../images/testimonial/pic1-2.png"
                  alt=""
                  className="w-14 h-14 object-cover rounded-full border-2 border-gray-100"
                />

                <img
                  src="../images/testimonial/pic2-2.png"
                  alt=""
                  className=" -ml-4 vw-14 h-14 object-cover rounded-full border-2 border-gray-100"
                />
                <span className=" -ml-4 vw-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center justify-center">
                  +12k
                </span>
              </div>
            </div>
          </div>
          <div className="left w-1/2 relative z-50">
            <Title level={2}>What our client say about us</Title>
            <BodyOne className="mb-8">
              There are various reasons why many people think that friendship
              plays an important role in their life. The most important reason
              can be that everyone needs at least a friend to share everything
              regardless of sadness or happiness.
            </BodyOne>
            <Slider {...settings}>
              
              <TestimonialsCard
                name="Kenneth Fong"
                post="Undergraduate Student"
                cover="../images/testimonial/pic5.jpg"
              />
              <TestimonialsCard
                name="Joe Do"
                post="Postgraduate Student"
                cover="../images/testimonial/pic6.jpg"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

export const TestimonialsCard = ({ cover, name, post }) => {
  return (
    <>
      <div className="flex items-center gap-8">
        <div className="w-20 h-20 ">
          <img
            src={cover}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="details">
          <Title className="font-medium leading-none" level={5}>
            {name}
          </Title>
          <p>{post}</p>
        </div>
      </div>
    </>
  );
};
