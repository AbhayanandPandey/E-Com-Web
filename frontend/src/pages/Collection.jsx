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
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.subCategory));
    }
    if (sort === "low-high") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high-low") filtered.sort((a, b) => b.price - a.price);
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
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-gray-200 pb-8 px-3 sm:px-6 lg:px-10 bg-white">
      {/* Sidebar Filters */}
      <aside
        className={`w-full sm:w-64 sm:sticky sm:top-24 h-auto sm:h-[80vh]  scrollbar-thin scrollbar-thumb-gray-300 rounded-xl border border-gray-200 bg-gray-50 sm:p-5 p-3 transition-all duration-300 ${
          showFilter ? "max-h-screen" : "max-h-14 sm:max-h-full"
        }`}
      >
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 sm:cursor-default sm:mb-5 "
        >
          <span className="w-full h-fit py-0">Filters</span>
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transform transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </div>

        <div className={`${showFilter ? "block" : "hidden"} sm:block mt-3`}>
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
              Categories
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={handleCategoryChange}
                    className="accent-black w-4 h-4"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
              Type
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleTypeChange}
                    className="accent-black w-4 h-4"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Products Section */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 bg-gray-50 hover:bg-gray-100 text-sm rounded-md px-3 py-2 outline-none cursor-pointer transition"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {filterProd.length === 0 ? (
          <p className="text-gray-500 text-center mt-10 text-sm">
            No products match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        )}
      </main>
    </div>
  );
};

export default Collection;
