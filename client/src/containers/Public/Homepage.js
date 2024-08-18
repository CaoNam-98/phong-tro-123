import React from "react";
import { text } from "../../ultils/constant";
import { Province } from "../../components";
import { List } from "./index";

const Homepage = () => {
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
        </div>

        <div className="w-[30%] border-green-500 border">Sidebar</div>
      </div>
    </div>
  );
};

export default Homepage;
