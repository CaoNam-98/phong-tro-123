import React from "react";

const Sitem = ({ title, price, image, createdAt }) => {
  return (
    <div className="w-full flex items-center gap-2 py-2 border-b border-gray-300">
      <img
        src={image}
        alt="anh"
        className="w-[65px] h-[65px] object-cover rounded-md"
      />
      <div className="w-full flex flex-col justify-between gap-1">
        <h4 className="text-blue-600 text-[14px]">
          {`${title?.slice(0, 45)}...`}
        </h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-300">{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
