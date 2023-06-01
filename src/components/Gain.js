import "./styles/Gain.scss";

function Gain() {
    return (
        <div className="Gain">
            <p>
                <img src="./social_profile.png" />
                <span>Deterism</span><br />
                <span>아잉의 음운의 개수는 3개</span>
            </p>
            <hr />
            <a>글</a>
            <a>시리즈</a>
            <a>소개</a>
            <input type="text" placeholder="검색어를 입력하세요"></input>
            <a>태그 목록</a>
            <br />
            <button className="lookall-button">전체보기 (0)</button>
        </div>
    )
}

export default Gain;