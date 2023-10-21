import PropTypes from "prop-types";

const ProductSlider = ({ products }) => {
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <img src={product.img} alt="" key={product.id} />
        // <img key={product.id}>{product.img} </img>
      ))}
    </div>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.any,
};

export default ProductSlider;
