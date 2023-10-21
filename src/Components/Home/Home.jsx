import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCards from "../BrandCards/BrandCards";
import Footer from "../Footer/Footer";
import Course from "../Course/Course";
import Affiliate from "../Affiliate/Affiliate";

const Home = () => {
  const brandsData = useLoaderData();
  console.log(brandsData);

  return (
    <div>
      <Banner />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {brandsData.map((data) => (
          <BrandCards key={data._id} data={data} />
        ))}
      </div>
      <div className="my-10">
        <Course />
      </div>
      <div className="my-10">
        <Affiliate />
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
