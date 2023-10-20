import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="my-10 container mx-auto flex flex-col-reverse gap-3 items-center">
      <div className="text-center">
        <h2 className="font-medium text-xl">{data.description}</h2>
        <p className="mt-3 font-semibold">Price: {data.price} </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
          Update
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 mx-5">
          Add to cart
        </button>
      </div>
      <div className="w-[80%]">
        <img className="h-[400px] w-full" src={data.img} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
