import { useLoaderData } from "react-router-dom";

const BrandProduct = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h2>Products Coming</h2>
    </div>
  );
};

export default BrandProduct;
