import PropTypes from "prop-types";

const ProductSlider = ({ products }) => {
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.productName}, {product.img} </div>
      ))}
    </div>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.any,
};

export default ProductSlider;
