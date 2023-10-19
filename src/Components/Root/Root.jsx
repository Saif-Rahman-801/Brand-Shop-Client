import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="relative bottom-0 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
