import React, { useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../ultils/icons";
import { useSelector } from "react-redux";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState('')
  const { provinces, areas, prices, categories } = useSelector(state => state.app);

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  }

  return (
    <>
      <div className="p-[10px] w-3/5 my-4 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span onClick={() => handleShowModal(categories, 'category')} className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<MdHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 173, 175)" />}
            text="Phòng trọ, nhà trọ"
          />
        </span>
        <span onClick={() => handleShowModal(provinces, 'province')} className=" cursor-pointer flex-1">
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156, 173, 175)" />}
            text="Toàn quốc"
          />
        </span>
        <span onClick={() => handleShowModal(prices, 'price')} className=" cursor-pointer flex-1">
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156, 173, 175)" />}
            text="Chọn giá"
          />
        </span>
        <span onClick={() => handleShowModal(areas, 'area')} className="cursor-pointer flex-1">
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156, 173, 175)" />}
            text="Chọn diện tích"
          />
        </span>

        <button
          type="button"
          className="outline-none py-2 px-4 flex-1 bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium rounded-lg"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && <Modal name={name} content={content} setIsShowModal={setIsShowModal}/>}
    </>
  );
};

export default Search;
