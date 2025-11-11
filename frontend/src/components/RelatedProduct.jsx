import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useParams, useNavigate } from "react-router-dom";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const matched = products
        .filter(
          (p) =>
            p.category === category &&
            p.subCategory === subCategory &&
            p._id !== productId
        )
        .slice();
      setRelated(matched);
    }
  }, [products, category, subCategory, productId]);

  if (related.length === 0)
    return (
      <div className="text-center text-gray-500 mt-16 text-sm">
        No related products found.
      </div>
    );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-16">
      <div className="text-center text-3xl mb-6">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item, i) => (
          <div key={i} onClick={() => handleProductClick(item._id)}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
