import { Caption, Title } from "../../components/common/CustomComponents";
import { Hero } from "../../components/hero/Hero";
import { InstagramPost } from "../../components/hero/InstagramPost";
import Testimonials from "../../components/hero/Testimonials";
import Banner from "../../components/product/Banner";
import ProductSlice, {
  ProductSliceCard,
} from "../../components/product/ProductSlide";
import ShippingInfo from "../../components/product/ShippingInfo";
import Product from "../product/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlice />
      <Testimonials />

      <div className="container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART</Caption>
        <br />
        <ProductSliceCard />
      </div>
      <InstagramPost />
    </>
  );
};

export default Home;
