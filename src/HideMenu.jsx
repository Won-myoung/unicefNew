import { useEffect, useState } from "react";
import "./css/HideMenu.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function HideMenu({ onClose }) {
  const [activeButton, setActiveButton] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  //메뉴 마우스 enter시 메뉴 바뀜
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveButton("button1");
    } else if (path === "/sponsor") {
      setActiveButton("button2");
    } else if (path === "/introduce") {
      setActiveButton("button3");
    }
  }, [location.pathname]);

  //메뉴 클릭시 각 메뉴로 이동
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "button1") {
      navigate("/");
    } else if (buttonName === "button2") {
      navigate("/sponsor");
    } else if (buttonName === "button3") {
      navigate("/introduce");
    }
    onClose();
  };

  const handleMouseEnter = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [subMenu, setSubMenu] = useState("subMenu01");
  // 초기 상태는 'DoingSub01'

  const handleButtonClickSMenu = (tab) => {
    setSubMenu(tab);
    // 버튼을 누를 때마다 currentTab 상태 업데이트
  };

  return (
    <div className="hideMenu" /* onMouseLeave={handleMouseLeave} */>
      <div className="topMenu">
        <div className="topButton">
          <Link to="" className="logIn">
            로그인
          </Link>

          <div className="topIcons">
            <Link to="">
              <img src="/homeBtn.png" alt="" className="homeBtn" />
            </Link>
            <Link to="">
              <img src="/searchBtn.png" alt="" className="searchBtn" />
            </Link>
            <button onClick={onClose}>
              <img src="/xBtn.png" alt="" className="searchBtn" />
            </button>
          </div>
        </div>
        <div className="middleIcons">
          <Link to="" className="mypage">
            <img src="/mypage.png" alt="" />
            마이페이지
          </Link>
          <Link to="" className="info">
            <img src="/info.png" alt="" />
            후원/결제정보
          </Link>
          <Link to="">
            <img src="/history.png" alt="" />
            후원내역
          </Link>
          <Link to="">
            <img src="/faq.png" alt="" />
            FAQ
          </Link>
        </div>
        <button className="receiptBtn">기부금 영수증 신청</button>
      </div>
      <div className="menuList">
        <div className="menuListLeft">
          <button
            className={`button ${activeButton === "button1" ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter("button1")}
            onClick={() => handleButtonClick("button1")}
          >
            하는 일
          </button>
          <button
            className={`button ${activeButton === "button2" ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter("button2")}
            onClick={() => handleButtonClick("button2")}
          >
            후원과 참여
          </button>
          <button
            className={`button ${activeButton === "button3" ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter("button3")}
            onClick={() => handleButtonClick("button3")}
          >
            유니세프 소개
          </button>
        </div>
        <div
          className="menuListRight"
          onMouseEnter={() => setActiveButton(activeButton)}
        >
          <div className={`class1 ${activeButton === "button1" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass `}>
                <ul
                  onClick={() => handleButtonClickSMenu("subMenu01")}
                  className={subMenu === "subMenu01" ? "active" : ""}
                >
                  전세계 모든 어린이를 위해
                  {subMenu === "subMenu01" && (
                    <>
                      <li>활동지역</li>
                      <li>스쿨스 포 아시아</li>
                      <li>#OnMyMind</li>
                    </>
                  )}
                </ul>
              </li>
              <li className={`closeList boldClass `}>
                <ul
                  onClick={() => handleButtonClickSMenu("subMenu02")}
                  className={subMenu === "subMenu02" ? "active" : ""}
                >
                  차별없는 구호
                  {subMenu === "subMenu02" && (
                    <>
                      <li>생존과 발달</li>
                      <li>교육</li>
                      <li>보호</li>
                      <li>안전하고 지속 가능한 환경</li>
                      <li>공평한 기회</li>
                    </>
                  )}
                </ul>
              </li>
              <li className={`closeList boldClass `}>
                <ul
                  onClick={() => handleButtonClickSMenu("subMenu03")}
                  className={subMenu === "subMenu03" ? "active" : ""}
                >
                  어린이 삶 개선
                  {subMenu === "subMenu03" && (
                    <>
                      <li>기후위기 대응</li>
                      <li>이노베이션</li>
                      <li>성 평등</li>
                      <li>장애 어린이</li>
                      <li>조사와 연구</li>
                    </>
                  )}
                </ul>
              </li>
              <li className={`closeList boldClass `}>
                <ul
                  onClick={() => handleButtonClickSMenu("subMenu04")}
                  className={subMenu === "subMenu04" ? "active" : ""}
                >
                  긴급구호
                  {subMenu === "subMenu04" && (
                    <>
                      <li>코로나19와 백신</li>
                      <li>인도주의 지원</li>
                      <li>난민 어린이</li>
                    </>
                  )}
                </ul>
              </li>
              <li className={`closeList boldClass `}>
                <ul
                  onClick={() => handleButtonClickSMenu("subMenu05")}
                  className={subMenu === "subMenu05" ? "active" : ""}
                >
                  한국 아동권리 증진
                  {subMenu === "subMenu05" && (
                    <>
                      <li>아동권리협약 이행</li>
                      <li>정책 개선 활동</li>
                      <li>아동친화사회 만들기</li>
                      <li>권리 교육</li>
                    </>
                  )}
                </ul>
              </li>
              <li className={`closeList boldClass `}>소식</li>
              <li className={`closeList boldClass `}>자료실</li>
              <li className={`closeList boldClass `}>한국 정부 협력</li>
            </ul>
          </div>

          <div className={`class2 ${activeButton === "button2" ? "show" : ""}`}>
            전세계 모든 어린이를 위해2
            <ul>
              <li>활동지역</li>
              <li>스쿨스 포 아시아</li>
              <li>#OnMyMind</li>
            </ul>
          </div>
          <div className={`class3 ${activeButton === "button3" ? "show" : ""}`}>
            전세계 모든 어린이를 위해3
            <ul>
              <li>활동지역</li>
              <li>스쿨스 포 아시아</li>
              <li>#OnMyMind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
