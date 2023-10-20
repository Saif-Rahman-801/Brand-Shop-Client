import { useLoaderData } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import CardProduct from "./CardProduct";

const BrandProduct = () => {
  const BrandProducts = useLoaderData();
  console.log(BrandProducts);
  const { products } = BrandProducts;
  return (
    <div>
      <h2>Products Coming</h2>
      <div>
        <ProductSlider products={products} />
        {/* {products.map((product) => (
          <ProductSlider key={product.id} product={product} />
        ))} */}
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <CardProduct BrandProducts={BrandProducts} key={product.identifier} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
