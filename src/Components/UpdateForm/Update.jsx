const Update = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto p-8">
          <form
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={() => {}}
          >
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-600"
              >
                Brand Name
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-600"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="headphone">Headphone</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Short Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-600"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
