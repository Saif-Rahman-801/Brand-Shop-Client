import PropTypes from "prop-types";
const CardProduct = ({ product }) => {
  const { productName, img, type, price, rating } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[400px]">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName} </h2>
          <p>Type: {type} </p>
          <p>Price: {price} </p>
          <p>Rating: {rating} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.any,
};

export default CardProduct;
