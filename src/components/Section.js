import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gain from "./Gain";
import Main from "./Main";

function Section() {
  return (
    <div className="Section">
      <BrowserRouter>
        <Routes>
          <Route path="/Gain" element={<Gain />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Section;
