import { useLoaderData } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import CardProduct from "./CardProduct";

const BrandProduct = () => {
  const BrandProducts = useLoaderData();
  console.log(BrandProducts);
  const { products } = BrandProducts;
  return (
    <div>
      <div className="container mx-auto my-10 w-[400px]">
        <ProductSlider products={products} />
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
