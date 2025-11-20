import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Beds from "./pages/Beds";
import Location from "./pages/Location";   // 🔥 추가

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/location" element={<Location />} />  {/* 🔥 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
