import { useEffect, useState } from "react";
import "./css/HideMenu.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function HideMenu({ onClose }) {
  const [activeButton, setActiveButton] = useState("button1");

  const navigate = useNavigate();
  const location = useLocation();

  //큰메뉴 마우스 enter시 작은메뉴 바뀜
  useEffect(() => {
    const path = location.pathname;
    if (path === "/doing") {
      setActiveButton("button1");
      setActiveMainMenu("menu1");
      // 메뉴 버튼이 변경될 때 메인 메뉴의 상태를 초기화합니다.
    } else if (path === "/sponsor") {
      setActiveButton("button2");
      setActiveMainMenu("menu2");
    } else if (path === "/introduce") {
      setActiveButton("button3");
      setActiveMainMenu("menu3");
    }
  }, [location.pathname]);

  //메뉴 클릭시 각 메뉴로 이동
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "button1") {
      navigate("/doing");
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

  const [subMenu, setSubMenu] = useState("subMenu01"); // submenu open
  const [activeMainMenu, setActiveMainMenu] = useState("menu1"); //메뉴 홧살표 넣기

  const handleButtonClickSMenu = (tab, menu) => {
    if (activeMainMenu === menu) {
      // 이미 열려 있는 메뉴를 다시 클릭한 경우 아무 변화도 일어나지 않도록 함
      return;
    }
    setSubMenu(tab);
    setActiveMainMenu(activeMainMenu === menu ? null : menu);

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
            <Link to="/" onClick={onClose}>
              <img src="/homeBtn.png" alt="" className="homeBtn" />
            </Link>
            <Link to="">
              <img src="/searchBtn.png" alt="" className="searchBtn" />
            </Link>
            <button onClick={onClose}>
              <img src="/xBtn.png" alt="" className="xBtn" />
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
              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu1" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu01", "menu1")}
                >
                  전세계 모든 어린이를 위해
                  <img
                    src={
                      activeMainMenu === "menu1"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu1" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu01" && (
                  <ul className="subMenu">
                    <li>활동지역</li>
                    <li>스쿨스 포 아시아</li>
                    <li>#OnMyMind</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu2" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu02", "menu2")}
                >
                  차별 없는 구호
                  <img
                    src={
                      activeMainMenu === "menu2"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu2" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu02" && (
                  <ul className="subMenu">
                    <li>생존과 발달</li>
                    <li>교육</li>
                    <li>보호</li>
                    <li>안전하고 지속 가능한 환경</li>
                    <li>공평한 기회</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu3" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu03", "menu3")}
                >
                  어린이 삶 개선
                  <img
                    src={
                      activeMainMenu === "menu3"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu3" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu03" && (
                  <ul className="subMenu">
                    <li>기후위기 대응</li>
                    <li>이노베이션</li>
                    <li>성 평등</li>
                    <li>장애 어린이</li>
                    <li>조사와 연구</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu4" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu04", "menu4")}
                >
                  긴급구호
                  <img
                    src={
                      activeMainMenu === "menu4"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu4" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu04" && (
                  <ul className="subMenu">
                    <li>코로나19와 백신</li>
                    <li>인도주의 지원</li>
                    <li>난민 어린이</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu5" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu05", "menu5")}
                >
                  한국 아동권리 증진
                  <img
                    src={
                      activeMainMenu === "menu5"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu5" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu05" && (
                  <ul className="subMenu">
                    <li>아동권리협약 이행</li>
                    <li>정책 개선 활동</li>
                    <li>아동친화사회 만들기</li>
                    <li>권리 교육</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu6" || subMenu === "subMenu06"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu06", "menu6")}
                >
                  소식
                </div>
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu7" || subMenu === "subMenu07"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu07", "menu7")}
                >
                  자료실
                </div>
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu8" || subMenu === "subMenu08"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu08", "menu8")}
                >
                  한국 정부 협력
                </div>
              </li>
            </ul>
          </div>

          <div className={`class2 ${activeButton === "button2" ? "show" : ""}`}>
            <ul>
              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu9" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu09", "menu9")}
                >
                  개인이 후원
                  <img
                    src={
                      activeMainMenu === "menu9"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={activeMainMenu === "menu9" ? "up arrow" : "down arrow"}
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu09" && (
                  <ul className="subMenu">
                    <li>정기후원</li>
                    <li>일시후원</li>
                    <li>생명을 구하는 선물</li>
                    <li>고액 · 아너스 클럽</li>
                    <li>기념기부</li>
                    <li>유산-추모기부</li>
                    <li>Party for UNICEF</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu10" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu10", "menu10")}
                >
                  단체에서 후원
                  <img
                    src={
                      activeMainMenu === "menu10"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={
                      activeMainMenu === "menu10" ? "up arrow" : "down arrow"
                    }
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu10" && (
                  <ul className="subMenu">
                    <li>기업 · 기관 사회공헌</li>
                    <li>학교후원</li>
                    <li>병원후원</li>
                    <li>후원회</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu11" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu11", "menu11")}
                >
                  후원자 참여
                  <img
                    src={
                      activeMainMenu === "menu11"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={
                      activeMainMenu === "menu11" ? "up arrow" : "down arrow"
                    }
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu11" && (
                  <ul className="subMenu">
                    <li>현장 방문</li>
                    <li>행사 · 이벤트</li>
                    <li>참여 활동</li>
                    <li>후원자 이야기</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu12" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu12", "menu12")}
                >
                  어린이 참여
                  <img
                    src={
                      activeMainMenu === "menu12"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={
                      activeMainMenu === "menu12" ? "up arrow" : "down arrow"
                    }
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu12" && (
                  <ul className="subMenu">
                    <li>어린이지구촌체험관</li>
                    <li>아동의회</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu13" || subMenu === "subMenu013"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu013", "menu13")}
                >
                  이벤트/캠페인
                </div>
              </li>
            </ul>
          </div>

          <div className={`class3 ${activeButton === "button3" ? "show" : ""}`}>
            <ul>
              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu14" ? "activeMainMenu" : ""
                }`}
              >
                {" "}
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu14", "menu14")}
                >
                  유니세프
                  <img
                    src={
                      activeMainMenu === "menu14"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={
                      activeMainMenu === "menu14" ? "up arrow" : "down arrow"
                    }
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu14" && (
                  <ul className="subMenu">
                    <li>소개</li>
                    <li>걸어온 길</li>
                    <li>미션과 가치</li>
                    <li>조직</li>
                  </ul>
                )}
              </li>
              <li
                className={`closeList boldClass ${
                  activeMainMenu === "menu15" ? "activeMainMenu" : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu15", "menu15")}
                >
                  투명한 유니세프
                  <img
                    src={
                      activeMainMenu === "menu15"
                        ? "/upArrow.png"
                        : "/downArrow.png"
                    }
                    alt={
                      activeMainMenu === "menu15" ? "up arrow" : "down arrow"
                    }
                    className="arrowIcon"
                  />
                </div>
                {subMenu === "subMenu15" && (
                  <ul className="subMenu">
                    <li>기금 사용처</li>
                  </ul>
                )}
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu16" || subMenu === "subMenu16"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu16", "menu16")}
                >
                  유니세프와 사람들
                </div>
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu17" || subMenu === "subMenu17"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu17", "menu17")}
                >
                  공지사항
                </div>
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu18" || subMenu === "subMenu18"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu18", "menu18")}
                >
                  보도자료
                </div>
              </li>

              <li
                className={`closeList boldClass ${
                  activeButton === "menu19" || subMenu === "subMenu19"
                    ? "activeMainMenu"
                    : ""
                }`}
              >
                <div
                  className="mainMenu"
                  onClick={() => handleButtonClickSMenu("subMenu19", "menu19")}
                >
                  채용
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
