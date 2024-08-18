import React from "react";
import icons from "../ultils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/03/623042611a64d83a817527_1659520128.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/03/4f462a177212b04ce90323_1659520123.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/03/5fe176b02eb5ecebb5a425_1659520123.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/03/8b266c703475f62baf6419_1659520125.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = () => {
  return (
    <div className="w-full flex border-t border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img src={images[0]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[1]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[2]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[3]} alt="preview" className="w-[140px] h-[120px] object-cover" />
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 font-medium">
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="font-bold text-green-600">3.7 triệu/tháng</span>
          <span>90m²</span>
          <span>Quận Tân Bình, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500">
          Ký Túc Xá Tiện Nghi tại trung tâm QUẬN BÌNH THẠNH. Giá chỉ từ: 1.655.000 VND/tháng/giường (tầng 1) Vị trí:
          tiện lợi đi lại. Gần các quận trung tâm và…
        </p>
        <div className="flex my-5 items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.ai5uSvv0f0venLUFGdVBQQHaHw&pid=Api&P=0&h=180"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover"
            />
            <p>Tuệ Thu</p>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="bg-blue-700 text-white p-1 rounded-md">
              Gọi 4565265332
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
