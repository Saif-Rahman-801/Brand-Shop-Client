import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCards from "../BrandCards/BrandCards";

const Home = () => {
  const brandsData = useLoaderData();
  console.log(brandsData);
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3">
        {brandsData.map((data, index) => (
          <BrandCards key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
