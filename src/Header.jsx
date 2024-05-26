import { Link, useLocation } from "react-router-dom";
import "./css/Header.css";
import { useEffect, useState } from "react";
import HideMenu from "./HideMenu";
import Introduce from "./Introduce";
import TestMenu from "./MainPage";

function Header() {
  // HideMenu 모달의 열림/닫힘 상태 관리
  const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);

  const toggleHideMenu = () => {
    setIsHideMenuOpen(!isHideMenuOpen);
  };
  //HideMenu end

  const location = useLocation();
  const [isDoingMenuOpen, setIsDoingMenuOpen] = useState(false);
  const [isGiveMenuOpen, setIsGiveMenuOpen] = useState(false);
  const [isIntroduceMenuOpen, setIsIntroduceMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDoingMenuOpen(false);
    setIsGiveMenuOpen(false);
    setIsIntroduceMenuOpen(false);
  };

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
    setIsIntroduceMenuOpen(true);
    setIsDoingMenuOpen(false);
    setIsGiveMenuOpen(false);
  };

  useEffect(() => {
    const handleMouseLeaveDocument = () => {
      setIsDoingMenuOpen(false);
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
      <Link
        to="/"
        className="uniMainButton"
        onClick={() => {
          setIsDoingMenuOpen(false);
          setIsGiveMenuOpen(false);
          setIsIntroduceMenuOpen(false);
        }}
      >
        <img
          src="https://www.unicef.or.kr/static/logo_active_30th@2x-bf93e28bab61b440b4527f6bde4e407e.png"
          alt=""
        />
      </Link>
      <div className="removeMenu">
        <Link
          to="/doing"
          className={`doingMenuButton ${
            location.pathname === "/doing" ? "active" : ""
          } topMenu`}
          onMouseEnter={handleDoingMenuEnter}
          onClick={handleMenuClick}
        >
          하는 일
        </Link>

        <div
          className="doingMenuSpread"
          style={{ display: isDoingMenuOpen ? "flex" : "none" }}
          onMouseLeave={() => setIsDoingMenuOpen(false)}
          onClick={handleMenuClick} // 이벤트 위임을 위해 추가
        >
          <ul>
            <li className="boldClass">
              <Link to="/doing">전세계 모든 어린이를 위해</Link>
              <ul>
                <li>
                  <Link to="/doing">활동지역</Link>
                </li>
                <li>
                  <Link to="/doing">스쿨스 포 아시아</Link>
                </li>
                <li>
                  <Link to="/doing">#OnMyMind</Link>
                </li>
                <li className="boldClass">
                  <Link to="/doing">소식</Link>
                </li>
                <li className="boldClass">
                  <Link to="/doing">자료실</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/doing">차별없는 구호</Link>
              <ul>
                <li>
                  <Link to="/doing">생존과 발달</Link>
                </li>
                <li>
                  <Link to="/doing">교육</Link>
                </li>
                <li>
                  <Link to="/doing">보호</Link>
                </li>
                <li>
                  <Link to="/doing">안전하고 지속 가능한 환경</Link>
                </li>
                <li>
                  <Link to="/doing">공평한 기회</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/doing">어린이 삶 개선</Link>
              <ul>
                <li>
                  <Link to="/doing">기후위기 대응</Link>
                </li>
                <li>
                  <Link to="/doing">이노베이션</Link>
                </li>
                <li>
                  <Link to="/doing">성 평등</Link>
                </li>
                <li>
                  <Link to="/doing">장애 어린이</Link>
                </li>
                <li>
                  <Link to="/doing">조사와 연구</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/doing">긴급구호</Link>
              <ul>
                <li>
                  <Link to="/doing">코로나19와 백신</Link>
                </li>
                <li>
                  <Link to="/doing">인도주의 지원</Link>
                </li>
                <li>
                  <Link to="/doing">난민 어린이</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/doing">한국 아동권리 증진</Link>
              <ul>
                <li>
                  <Link to="/doing">아동권리협약 이행</Link>
                </li>
                <li>
                  <Link to="/doing">정책 개선 활동</Link>
                </li>
                <li>
                  <Link to="/doing">아동친화사회 만들기</Link>
                </li>
                <li>
                  <Link to="/doing">권리 교육</Link>
                </li>
                <li className="boldClass">
                  <Link to="/doing">한국 정부 협력</Link>
                </li>
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
          onClick={handleMenuClick}
        >
          후원과 참여
        </Link>

        <div
          className="giveMenuSpread"
          style={{ display: isGiveMenuOpen ? "flex" : "none" }}
          onMouseLeave={() => setIsGiveMenuOpen(false)}
          onClick={handleMenuClick}
        >
          <ul>
            <li className="boldClass">
              <Link to="/sponsor">개인이 후원</Link>
              <ul>
                <li>
                  <Link to="/sponsor">정기후원</Link>
                </li>
                <li>
                  <Link to="/sponsor">일시후원</Link>
                </li>
                <li>
                  <Link to="/sponsor">생명을 구하는 선물</Link>
                </li>
                <li>
                  <Link to="/sponsor">고액·아너스클럽</Link>
                </li>
                <li>
                  <Link to="/sponsor">기념기부</Link>
                </li>
                <li>
                  <Link to="/sponsor">유산-추모기부</Link>
                </li>
                <li>
                  <Link to="/sponsor">Party for UNICEF</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/sponsor">단체에서 후원</Link>
              <ul>
                <li>
                  <Link to="/sponsor">기업·기관 사회공헌</Link>
                </li>
                <li>
                  <Link to="/sponsor">학교후원</Link>
                </li>
                <li>
                  <Link to="/sponsor">병원후원</Link>
                </li>
                <li>
                  <Link to="/sponsor">후원회</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/sponsor">후원자 참여</Link>
              <ul>
                <li>
                  <Link to="/sponsor">현장 방문</Link>
                </li>
                <li>
                  <Link to="/sponsor">행사·이벤트</Link>
                </li>
                <li>
                  <Link to="/sponsor">참여활동</Link>
                </li>
                <li>
                  <Link to="/sponsor">후원자 이야기</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/sponsor">어린이 참여</Link>
              <ul>
                <li>
                  <Link to="/sponsor">어린이지구촌체험관</Link>
                </li>
                <li>
                  <Link to="/sponsor">아동의회</Link>
                </li>
                <li className="boldClass">
                  <Link to="/sponsor">이벤트/캠페인</Link>
                </li>
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
          onClick={handleMenuClick}
        >
          유니세프 소개
        </Link>

        <div
          className="introduceMenuSpread"
          style={{ display: isIntroduceMenuOpen ? "flex" : "none" }}
          onMouseLeave={() => setIsIntroduceMenuOpen(false)}
          onClick={handleMenuClick}
        >
          <ul>
            <li className="boldClass">
              <Link to="/introduce">유니세프</Link>
              <ul>
                <li>
                  <Link to="/introduce">소개</Link>
                </li>
                <li>
                  <Link to="/introduce">걸어온 길</Link>
                </li>
                <li>
                  <Link to="/introduce">미션과 가치</Link>
                </li>
                <li>
                  <Link to="/introduce">조직</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/introduce">투명한 유니세프</Link>
              <ul>
                <li>
                  <Link to="/introduce">기금사용처</Link>
                </li>
                <li className="boldClass">
                  <Link to="/introduce">유니세프와 사람들</Link>
                </li>
              </ul>
            </li>
            <li className="boldClass">
              <Link to="/introduce">공지사항</Link>
              <ul>
                <li className="boldClass">
                  <Link to="/introduce">보도자료</Link>
                </li>
                <li className="boldClass">
                  <Link to="/introduce">채용</Link>
                </li>
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
