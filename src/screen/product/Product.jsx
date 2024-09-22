import { productlists } from "../../assets/data/data";
import { BodyOne, Title } from "../../components/common/CustomComponents";
import ProductCard from "../../components/product/ProductCard";

const Product = () => {
  return (
    <div>
      <section className="py-20 bg-white-100">
        <div className="container">
          <Title level={4}>Most Popular Products</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">All Products</BodyOne>
            <BodyOne className="text-sm text-primary-green">
              wooden products (15)
            </BodyOne>
          </div>
          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
