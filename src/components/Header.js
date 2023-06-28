import { BrowserRouter, Routes, Route } from "react-router-dom";
import GainHeader from "./GainHeader";

function Header() {
  return (
    <div className="Header">
      <BrowserRouter>
        <Routes>
          <Route path="/Gain" element={<GainHeader />}></Route>
          <Route path="/Main" element={<SubHeader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
