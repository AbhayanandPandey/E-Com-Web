import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProd, setFilterProd] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sort, setSort] = useState("relevant");

  
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.subCategory));
    }

    if (sort === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProd(filtered);
  }, [selectedCategories, selectedTypes, sort, products]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedTypes((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-10 pt-10 border-t border-gray-200 pb-6">
      {/* Sidebar Filters */}
      <div className="min-w-60 pb-5 sm:pb-0">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Categories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Type */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={type}
                  onChange={handleTypeChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 text-sm px-2 outline-none cursor-pointer"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProd.map((item, i) => (
            <ProductItem
              key={i}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
