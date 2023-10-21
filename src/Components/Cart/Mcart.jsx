import PropTypes from "prop-types";
import { toast } from "react-toastify";
const Mcart = ({ cart, dataCart, setDataCart }) => {
  const { productName, productPrice, _id } = cart;

  const onDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          const remaining = dataCart.filter((data) => data._id !== _id);
          setDataCart(remaining);
        }
      });
  };

  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{productName}</h2>
          <p className="text-gray-700 text-base mb-2">Price: ${productPrice}</p>
          <button
            onClick={() => onDelete(_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Mcart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.any,
    productName: PropTypes.any,
    productPrice: PropTypes.any,
  }),
  dataCart: PropTypes.any,
  setDataCart: PropTypes.any,
};

export default Mcart;
