import ProductCard from "../components/ProductCard";


const FeaturedProduct = ({ addToCart, productItems }) => {
  return (
    <section>
      <div className="mx-auto container py-6">
        <h2 className="text-2xl font-bold py-6 text-center">
          Featured Products
        </h2>
        <p className="w-1/2 text-center mx-auto py-4">
          Shop through varieties of items in our store
        </p>
        <div className="flex flex-row flex-wrap">
          <ProductCard addToCart={addToCart} productItems={productItems} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
