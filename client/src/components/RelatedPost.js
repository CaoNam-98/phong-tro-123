import React from "react";
import { Sitem } from "./index";

const RelatedPost = () => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        <Sitem
          image="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/06/29/img-2218_1719648477.jpg"
          title="Thuê phòng trọ sinh viên giá rẻ go vấp"
          price="3 triệu/tháng"
          createdAt="9 phút trước"
        />
        <Sitem
          image="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/06/29/img-2218_1719648477.jpg"
          title="Thuê phòng trọ sinh viên giá rẻ go vấp"
          price="3 triệu/tháng"
          createdAt="9 phút trước"
        />
        <Sitem
          image="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/06/29/img-2218_1719648477.jpg"
          title="Thuê phòng trọ sinh viên giá rẻ go vấp"
          price="3 triệu/tháng"
          createdAt="9 phút trước"
        />
      </div>
    </div>
  );
};

export default RelatedPost;
