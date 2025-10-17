import React from "react";
import { Link } from "react-router";

const Item = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/products/${product?.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* overlay badge or gradient */}
          {product?.isNew && (
            <span className="absolute top-3 left-3 bg-[#0FA899] text-white text-xs font-semibold py-1 px-3 rounded-full shadow">
              New
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <Link to={`/products/${product?.id}`}>
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#0FA899] transition-colors duration-200 line-clamp-1">
            {product?.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            {product?.old_price && (
              <span className="text-xs text-gray-400 line-through">
                ${product?.old_price}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              ${product?.new_price}
            </span>
          </div>

          <Link
            to={`/products/${product?.id}`}
            className="bg-[#0FA899] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#0d8e81] transition-all duration-200"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
