import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Beds from "./pages/Beds";
import Location from "./pages/Location";
import RoutePage from "./pages/Route"; // 경로 안내 페이지

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home />} />

        {/* 현재 위치 설정 */}
        <Route path="/location" element={<Location />} />

        {/* 병상 현황 */}
        <Route path="/beds" element={<Beds />} />

        {/* 경로 안내 */}
        <Route path="/route" element={<RoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
