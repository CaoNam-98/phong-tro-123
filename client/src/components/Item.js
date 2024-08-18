import React, { useState } from "react";
import icons from "../ultils/icons";

const indexs = [0, 1, 2, 3];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = ({ images, user, title, star, description, attributes, address }) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  return (
    <div className="w-full flex border-t border-orange-600 py-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images?.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return <img key={index} src={i} alt="preview" className="w-[140px] h-[120px] object-cover" />;
            })}
        <span className="bg-overlay-70 text-white px-2 rouded-md absolute left-1 bottom-4 rounded-md">{`${images?.length} ảnh`}</span>
        <span
          className=" text-white absolute right-6 bottom-1"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? <RiHeartFill size={26} color="red" /> : <RiHeartLine size={26} />}
        </span>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 font-medium">
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="font-bold text-green-600">{attributes?.price}</span>
          <span>{attributes?.screage}</span>
          <span>{address}</span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">{description}</p>
        <div className="flex my-5 items-center justify-between">
          <div className="flex items-center gap-1">
            <img
              src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="bg-blue-700 text-white p-1 rounded-md">
              {`Gọi ${user?.phone}`}
            </button>
            <button type="button" className="text-blue-700 p-1 rounded-md border border-blue-700">
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
