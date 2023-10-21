import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardProduct = ({ product }) => {
  const { productName, img, type, price, rating, id } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[400px]">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName} </h2>
          <p>Type: {type} </p>
          <p>Price: {price} </p>
          <p>Rating: {rating} </p>
          <div className="card-actions justify-end">
            <Link to={`/products/${id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to="/update" >
            <button className="btn btn-primary">update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  BrandProducts: PropTypes.any,
  product: PropTypes.shape({
    id: PropTypes.any,
    img: PropTypes.any,
    price: PropTypes.any,
    productName: PropTypes.any,
    rating: PropTypes.any,
    type: PropTypes.any,
  }),
};

export default CardProduct;
