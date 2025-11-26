import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Header from "./components/Header";
import Home from "./pages/Home";
import BedLocation from "./pages/BedLocation"; // ✅ 새로 만들 페이지
import Location from "./pages/Location";       // ✅ 결과 페이지
import RoutePage from "./pages/Route";         // 기존 경로 안내 페이지

import { SearchProvider } from "./context/SearchContext"; // ✅ 방금 만든 컨텍스트


function App() {
  return (
    <BrowserRouter>
      {/* 전역 상태 제공 */}
      <SearchProvider>
        <Header />
        <Routes>
          {/* 홈 */}
          <Route path="/" element={<Home />} />

          {/* 병상 유형 + 출발지 선택 페이지 (캡처 화면) */}
          <Route path="/beds" element={<BedLocation />} />

          {/* 선택값을 바탕으로 병원 목록을 보여주는 결과 페이지 */}
          <Route path="/location" element={<Location />} />

          {/* 경로 안내 페이지 (그대로 사용) */}
          <Route path="/route" element={<RoutePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;


