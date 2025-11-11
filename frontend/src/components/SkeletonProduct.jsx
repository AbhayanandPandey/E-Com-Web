import React from "react";

const SkeletonProduct = () => {
  return (
    <div className="animate-pulse border-t border-gray-300 pt-10">
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Left side images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 w-[24%] sm:w-full sm:mb-3 rounded h-24"
              ></div>
            ))}
          </div>
          <div className="w-full sm:w-[80%] bg-gray-200 h-[400px] rounded"></div>
        </div>

        {/* Right side skeleton */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-200 w-4 h-4 rounded"></div>
            ))}
          </div>
          <div className="bg-gray-200 h-8 w-1/4 rounded"></div>
          <div className="bg-gray-200 h-20 w-4/5 rounded"></div>
          <div className="bg-gray-200 h-10 w-1/3 rounded mt-4"></div>
          <div className="bg-gray-200 h-12 w-1/2 rounded mt-6"></div>
          <div className="bg-gray-200 h-24 w-4/5 rounded mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
