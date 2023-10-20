import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Register = () => {
  const { handleEmailPassReg, handleProfileUpdate, googleSubmit } =
    useContext(AuthProvider);

  const handleGoogleSubmit = () => {
    googleSubmit()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    console.log(email, password, name, image);

    // register with email pass
    handleEmailPassReg(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        handleProfileUpdate(user, name, image)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Please Register </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ImageUrl"
                className="block text-sm font-medium text-gray-600"
              >
                ImageUrl
              </label>
              <input
                type="text"
                id="ImageUrl"
                name="image"
                className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
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
              Register
            </button>
            <button
              onClick={handleGoogleSubmit}
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 my-3"
            >
              Register With Google
            </button>
          </form>
          <p>
            Already have an account? <Link to="/login">Please Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
