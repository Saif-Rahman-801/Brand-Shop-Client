import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ products }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screens greater than or equal to 1024px wide
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // screens greater than or equal to 600px wide
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // screens greater than or equal to 480px wide
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {products.map((product) => (
        <div key={product.id} className="text-center flex justify-center">
          <img className="w-[300px] " src={product.img} alt="" />
        </div>
      ))}
    </Slider>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default ProductSlider;
