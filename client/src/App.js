import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalApartment,
  RentalSpace,
  RentalRoom,
  RentalHouse,
  Homepage,
  DetailPost,
} from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          {/* Dấu * nghĩa là nó sẽ chạy xuống các route LOGIN, CHO_THUE_NHA, ... nếu mapping thì sẽ render component tương ứng, nếu không match thì render ra với path='*' này */}
          <Route path="*" element={<Homepage />} />
          <Route path={path.HOME__PAGE} element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.DETAIL_POST__TITLE_POSTID} element={<DetailPost />} />
          {/* Thằng nào đi từ bắt đầu chi-tiet thì vào */}
          <Route path={"chi-tiet/*"} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
