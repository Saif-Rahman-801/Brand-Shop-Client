import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
        <div className="bg-gray-100 h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-6">Please Login </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Login
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 my-3"
              >
                Login With Google
              </button>
            </form>
            <p>
              Do not have an account? <Link to="/register">Please Register </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;