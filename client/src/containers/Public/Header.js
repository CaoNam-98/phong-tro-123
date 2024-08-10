import React, { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constant";

const { CiCirclePlus } = icons;

const Header = () => {
  const navigate = useNavigate();
  // Flag là login hoặc register
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} class="w-[240px] h-[70px] object-contain" alt="logo" />
        </Link>

        <div className="flex items-center gap-1">
          <small>Phongtro123.com xin chào !</small>
          <Button text={"Đăng nhập"} textColor="text-white" bgColor="bg-[#3961fb]" onClick={() => goLogin(false)} />
          <Button text={"Đăng ký"} textColor="text-white" bgColor="bg-[#3961fb]" onClick={() => goLogin(true)} />
          <Button text={"Đăng tin miễn phí"} textColor="text-white" bgColor="bg-secondary2" IcAfter={CiCirclePlus} />
        </div>
      </div>
    </div>
  );
};

export default Header;
