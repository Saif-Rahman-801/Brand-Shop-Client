import bannerImage from "../../assets/food.jpg";
const Banner = () => {
  return (
    <div className="relative h-96 rounded-md">
      <img
        src={bannerImage}
        alt="Banner"
        className="object-cover w-full h-full rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Foodism
          </h1>
          <p className="text-lg mb-6">Explore Amazing Food Brands </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
