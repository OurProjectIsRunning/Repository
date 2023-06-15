import { Routes, Route } from "react-router-dom";
import "./styles/Gain.scss";
import Letter from "./GainContents/Letter";
import Series from "./GainContents/Series";
import About from "./GainContents/About";

function Gain() {
  return (
    <div className="Gain">
      <div className="profile-all">
        <div className="profile">
          <img className="profile-img" src="./social_profile.png" />

          <div className="profile-text">
            <p className="profile-name">Deterism</p>
            <p className="profile-info">아잉의 음운의 개수는 3개</p>
          </div>
        </div>
        <div className="vline" />
      </div>
      <div className="lookall">
        <div className="lookall-vline" />
        <div className="lookall-script">
          <a className="lookall-tag">글</a>
        </div>
        <div className="lookall-script">
          <a className="lookall-tag">시리즈</a>
        </div>
        <div className="lookall-script">
          <a className="lookall-tag">소개</a>
        </div>
      </div>

      <div class="tagList">
        <div class="title">태그 목록</div>
        <ul>
          <li class="showAll">
            전체보기
            <span>(0)</span>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Letter />}></Route>
        <Route path="/Series" element={<Series />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default Gain;
