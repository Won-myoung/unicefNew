// Props: 상위 컴포넌트에서 하위 컴포넌트로 피라미터를 전달하는 것.
// Home -> Prop name, age
import { useEffect, useState } from "react";
import "./css/doing.css";
import BgBar from "./pages/BgBar";
import DoingSub01 from "./pages/DoingSub01";
import DoingSub02 from "./pages/DoingSub02";
import DoingSub03 from "./pages/DoingSub03";

function Doing() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentTab, setCurrentTab] = useState("DoingSub01"); // 초기 상태는 'DoingSub01'

  const handleButtonClick = (tab) => {
    setCurrentTab(tab); // 버튼을 누를 때마다 currentTab 상태 업데이트
  };

  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize = () => {
    const minFontSize = 28; // 최소 폰트 크기 크기수정크기수정
    const maxFontSize = 48; // 최대 폰트 크기

    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    return `${fontSize}px`;
  };

  return (
    <div className="doing">
      <BgBar />
      <div className="doingTopBar">
        <h2 style={{ fontSize: calculateFontSize() }}>활동 지역</h2>
        <p>for every child, everywhere</p>
      </div>
      <div className="doingBodyWrap">
        <div className="doingBody01">
          <h2 style={{ fontSize: calculateFontSize() }}>
            모든 어린이가 행복한 나라
          </h2>
          <p>
            유니세프는 <span>190여 개 나라와 영토</span>에서 모든 어린이들, 특히
            가장 소외된 어린이의 권리와 복지를 증진하기 위해 일합니다. 전 세계
            거의 모든 나라에서 활동하기 때문에 긴급구호 상황에서 가장 신속하게
            현장에 접근합니다. 재난 전에도, 재난 중에도, 재난 후에도 한결같이
            어린이 곁을 지킵니다.
          </p>
          <div className="doingFeatures">
            <div>
              <img src="/earth.png" alt="" />
              <div>
                <p>유니세프 활동 국가 및 영토</p>
                <strong>약 190개 나라와 영토</strong>
              </div>
            </div>
            <div>
              <img src="/help.png" alt="" />
              <div>
                <p>도움을 받는 나라</p>
                <strong>158개국</strong>
              </div>
            </div>
            <div>
              <img src="/heart.png" alt="" />
              <div>
                <p>도움을 주는 나라</p>
                <strong>33개국</strong>
              </div>
            </div>
            <div>
              <img src="/medic.png" alt="" />
              <div>
                <p>구호물품 물류센터</p>
                <strong>6개국</strong>
              </div>
            </div>
            <div>
              <img src="/unicef.png" alt="" />
              <div>
                <p>유니세프 직원 수</p>
                <strong>약 15,000명 이상</strong>
              </div>
            </div>
            <div>
              <img src="/worker.png" alt="" />
              <div>
                <p>개발도상국 근무 직원</p>
                <strong>85%</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="doingBody02">
          <button
            onClick={() => handleButtonClick("DoingSub01")}
            className={currentTab === "DoingSub01" ? "active" : ""}
          >
            도움을 받는 나라
          </button>
          <button
            onClick={() => handleButtonClick("DoingSub02")}
            className={currentTab === "DoingSub02" ? "active" : ""}
          >
            유니세프 본부
          </button>
          <button
            onClick={() => handleButtonClick("DoingSub03")}
            className={currentTab === "DoingSub03" ? "active" : ""}
          >
            도움을 주는 나라
          </button>
          {currentTab === "DoingSub01" && <DoingSub01 />}
          {currentTab === "DoingSub02" && <DoingSub02 />}
          {currentTab === "DoingSub03" && <DoingSub03 />}
        </div>
      </div>
    </div>
  );
}

export default Doing;
