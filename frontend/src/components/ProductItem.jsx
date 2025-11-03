import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      className="text-gray-700 cursor-pointer group"
      to={`/product/${id}`}
    >
      <div className="relative overflow-hidden bg-gray-100 rounded-sm">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg min-w-full" />
        )}

        <img
          src={image[0]}
          alt={name}
          loading="lazy"
          onLoad={() => setImgLoaded(false)}
          className={`transition-transform duration-100 ease-in-out ${
            imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } group-hover:scale-110 min-w-full w-full `}
        />
      </div>

      <div className="pt-3">
        <p className="text-sm truncate">{name}</p>
        <p className="text-sm font-semibold text-gray-900">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
