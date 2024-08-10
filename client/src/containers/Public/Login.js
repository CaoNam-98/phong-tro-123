import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { apiRegister } from "../../services/auth";
import { useLocation } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("lo: ", location);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  const handleSubmit = async () => {
    console.log(payload);
    // const response = await apiRegister(payload);
    dispatch(actions.register(payload));
  };

  return (
    <div className="bg-white mt-3 flex flex-col w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">{isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}</h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && <InputForm label={"Họ tên"} value={payload.name} setValue={setPayload} type={"name"} />}
        <InputForm label={"Số điện thoại"} value={payload.phone} setValue={setPayload} type={"phone"} />
        <InputForm label={"Mật khẩu"} value={payload.password} setValue={setPayload} type={"password"} />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        />
      </div>

      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[orange] cursor-pointer">Bạn quên mật khẩu?</small>
            <small onClick={() => setIsRegister(true)} className="text-[blue] hover:text-[orange] cursor-pointer">
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
