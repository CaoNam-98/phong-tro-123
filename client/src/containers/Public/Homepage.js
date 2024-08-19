import React from "react";
import { text } from "../../ultils/constant";
import { Province } from "../../components";
import { List, Pagination } from "./index";
// useParams để lấy /2, useSearchParams lấy /?page=2
import { useParams, useSearchParams } from "react-router-dom";

const Homepage = () => {
  const [params] = useSearchParams();
  console.log(params.get("page"));

  return (
    <div className="border border-red-500 w-full mt-3 flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-[100%] flex gap-4">
        <div className="w-[70%] border-green-500 border">
          <List />
          <Pagination number={params.get("page")} />
          <div className="h-[500px]"></div>
        </div>

        <div className="w-[30%] border-green-500 border">Sidebar</div>
      </div>
    </div>
  );
};

export default Homepage;
