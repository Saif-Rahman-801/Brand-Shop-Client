import { useLoaderData } from "react-router-dom";
import ProductSlider from "./ProductSlider";

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
    </div>
  );
};

export default BrandProduct;
