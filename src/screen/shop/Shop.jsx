import { productlists } from "../../assets/data/data";
import ProductCard from "../../components/product/ProductCard";

const Shop = () => {
  return (
    <>
      <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
      </section>
    </>
  );
};

export default Shop;
