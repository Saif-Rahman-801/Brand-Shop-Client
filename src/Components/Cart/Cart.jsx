import { useLoaderData } from "react-router-dom";
import Mcart from "./Mcart";
import { useState } from "react";

const Cart = () => {
  const cartData = useLoaderData();
  console.log(cartData);
  const [dataCart, setDataCart] = useState(cartData);

  return (
    <div>
      <div>
      <h2 className="font-bold text-center my-10">Your Added Product Cart</h2>
      </div>
      <div className="container mx-auto flex">
        {dataCart.map((cart) => (
          <Mcart
            setDataCart={setDataCart}
            dataCart={dataCart}
            cart={cart}
            key={cart._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
