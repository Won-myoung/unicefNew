import { Link, useLocation } from "react-router-dom";
import "./css/Header.css";
import { useEffect, useState } from "react";
import HideMenu from "./HideMenu";
import Introduce from "./Introduce";
import TestMenu from "./MainPage"; // TestMenu 컴포넌트 import

function Header() {
  // HideMenu 모달의 열림/닫힘 상태 관리
  const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);

  const toggleHideMenu = () => {
    setIsHideMenuOpen(!isHideMenuOpen);
  };
  //HideMenu end

  const [isDoingMenuOpen, setIsDoingMenuOpen] = useState(false);
  const [isGiveMenuOpen, setIsGiveMenuOpen] = useState(false);
  const [isIntroduceMenuOpen, setIsIntroduceMenuOpen] = useState(false);
  const location = useLocation();

  const handleDoingMenuEnter = () => {
    setIsDoingMenuOpen(true);
    setIsGiveMenuOpen(false);
    setIsIntroduceMenuOpen(false);
  };
  const handleGiveMenuEnter = () => {
    setIsGiveMenuOpen(true);
    setIsDoingMenuOpen(false);
    setIsIntroduceMenuOpen(false);
  };
  const handleIntroduceMenuEnter = () => {
    setIsDoingMenuOpen(false);
    setIsGiveMenuOpen(false);
    setIsIntroduceMenuOpen(true);
  };

  /* 마우스가 브라우저 벗어나면 끄기 */
  useEffect(() => {
    const handleMouseLeaveDocument = () => {
      // setIsDoingMenuOpen(false);
      setIsGiveMenuOpen(false);
      setIsIntroduceMenuOpen(false);
    };

    document.addEventListener("mouseleave", handleMouseLeaveDocument);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeaveDocument);
    };
  }, []);

  return (
    <div className="header">
      <Link to="/" className="uniMainButton">
        <img
          src="https://www.unicef.or.kr/static/logo_active_30th@2x-bf93e28bab61b440b4527f6bde4e407e.png"
          alt=""
        />
      </Link>
      <div className="removeMenu">
        <Link
          to="/doing"
          className={`doingMenuButton ${
            location.pathname === "/" ? "active" : ""
          } topMenu`}
          onMouseEnter={handleDoingMenuEnter}
          onClick={() => {
            setIsDoingMenuOpen(false);
            setIsGiveMenuOpen(false);
            setIsIntroduceMenuOpen(false);
          }}
        >
          하는 일
        </Link>

        <div
          className="doingMenuSpread"
          style={{ display: isDoingMenuOpen ? "flex" : "none" }}
          onMouseEnter={handleDoingMenuEnter}
          onMouseLeave={() => setIsDoingMenuOpen(false)}
        >
          <ul>
            <li className="boldClass">
              전세계 모든 어린이를 위해
              <ul>
                <li>
                  <Link to="/">활동지역</Link>
                </li>
                <li>스쿨스 포 아시아</li>
                <li>#OnMyMind</li>
                <li className="boldClass">소식</li>
                <li className="boldClass">자료실</li>
              </ul>
            </li>
            <li className="boldClass">
              차별없는 구호
              <ul>
                <li>생존과 발달</li>
                <li>교육</li>
                <li>보호</li>
                <li>안전하고 지속 가능한 환경</li>
                <li>공평한 기회</li>
              </ul>
            </li>
            <li className="boldClass">
              어린이 삶 개선
              <ul>
                <li>기후위기 대응</li>
                <li>이노베이션</li>
                <li>성 평등</li>
                <li>장애 어린이</li>
                <li>조사와 연구</li>
              </ul>
            </li>
            <li className="boldClass">
              긴급구호
              <ul>
                <li>코로나19와 백신</li>
                <li>인도주의 지원</li>
                <li>난민 어린이</li>
              </ul>
            </li>
            <li className="boldClass">
              한국 아동권리 증진
              <ul>
                <li>아동권리협약 이행</li>
                <li>정책 개선 활동</li>
                <li>아동친화사회 만들기</li>
                <li>권리 교육</li>
                <li className="boldClass">한국 정부 협력</li>
              </ul>
            </li>
          </ul>
        </div>

        <Link
          to="/sponsor"
          className={`giveMenuButton ${
            location.pathname === "/sponsor" ? "active" : ""
          } topMenu`}
          onMouseEnter={handleGiveMenuEnter}
          onClick={() => {
            setIsDoingMenuOpen(false);
            setIsGiveMenuOpen(false);
            setIsIntroduceMenuOpen(false);
          }}
        >
          후원과 참여
        </Link>

        <div
          className="giveMenuSpread"
          style={{ display: isGiveMenuOpen ? "flex" : "none" }}
          onMouseEnter={handleGiveMenuEnter}
          onMouseLeave={() => setIsGiveMenuOpen(false)}
        >
          <ul>
            <li className="boldClass">
              개인이 후원
              <ul>
                <li>정기후원</li>
                <li>일시후원</li>
                <li>생명을 구하는 선물</li>
                <li>고액·아너스클럽</li>
                <li>기념기부</li>
                <li>유산-추모기부</li>
                <li>Party for UNICEF</li>
              </ul>
            </li>
            <li className="boldClass">
              단체에서 후원
              <ul>
                <li>기업·기관 사회공헌</li>
                <li>학교후원</li>
                <li>병원후원</li>
                <li>후원회</li>
              </ul>
            </li>
            <li className="boldClass">
              후원자 참여
              <ul>
                <li>현장 방문</li>
                <li>행사·이벤트</li>
                <li>참여활동</li>
                <li>후원자 이야기</li>
              </ul>
            </li>
            <li className="boldClass">
              어린이 참여
              <ul>
                <li>어린이지구촌체험관</li>
                <li>아동의회</li>
                <li className="boldClass">이벤트/캠페인</li>
              </ul>
            </li>
          </ul>
        </div>

        <Link
          to="/introduce"
          className={`introduceMenuButton ${
            location.pathname === "/introduce" ? "active" : ""
          } topMenu`}
          onMouseEnter={handleIntroduceMenuEnter}
          onClick={() => {
            setIsDoingMenuOpen(false);
            setIsGiveMenuOpen(false);
            setIsIntroduceMenuOpen(false);
          }}
        >
          유니세프 소개
        </Link>

        <div
          className="introduceMenuSpread"
          style={{ display: isIntroduceMenuOpen ? "flex" : "none" }}
          onMouseEnter={handleIntroduceMenuEnter}
          onMouseLeave={() => setIsIntroduceMenuOpen(false)}
        >
          <ul>
            <li className="boldClass">
              유니세프
              <ul>
                <li>소개</li>
                <li>걸어온 길</li>
                <li>미션과 가치</li>
                <li>조직</li>
              </ul>
            </li>
            <li className="boldClass">
              투명한 유니세프
              <ul>
                <li>기금사용처</li>
                <li className="boldClass">유니세프와 사람들</li>
              </ul>
            </li>
            <li className="boldClass">
              공지사항
              <ul>
                <li className="boldClass">보도자료</li>
                <li className="boldClass">채용</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Link className="sponsoring">후원하기</Link>
      <button onClick={toggleHideMenu} className="burgerIcon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      {/* HideMenu 모달 */}
      {isHideMenuOpen && <HideMenu onClose={toggleHideMenu} />}
    </div>
  );
}

export default Header;
