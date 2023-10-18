import PropTypes from "prop-types";

const BrandCards = ({ data }) => {
  const { title, img } = data;
  return (
    <div>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 h-64">
        <img className="w-full h-44 object-cover" src={img} alt={title} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

BrandCards.propTypes = {
  data: PropTypes.any,
};

export default BrandCards;
