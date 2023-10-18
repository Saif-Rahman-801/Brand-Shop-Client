import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl text-red-500 font-bold mb-6">Oops!</h1>
        <p className="text-gray-700 mb-4">Something went wrong.</p>
        <p className="text-gray-700 mb-4">
          The page you are looking for might be temporarily unavailable.
        </p>
        <p className="text-gray-700 mb-6">Please try again later.</p>
        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
