import { useEffect, useState } from "react";
import "./css/HideMenu.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function HideMenu({ onClose }) {
  const [activeButton, setActiveButton] = useState("button1");
  // 초기 상태에서는 button1(하는 일, doing)이 활성화됩니다.

  const navigate = useNavigate();
  const location = useLocation();

  // 페이지가 변경될 때마다 activeButton 상태를 업데이트합니다.(하얀색버튼위치를 현재페이지 )
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

  // 버튼을 클릭할 때 호출되는 함수입니다.
  const handleButtonClick = (buttonName) => {
    // 클릭된 버튼의 아이디를 가져와 현재 활성화된 버튼 상태를 업데이트합니다.
    setActiveButton(buttonName);

    // 버튼에 따라 페이지 이동을 처리합니다.
    if (buttonName === "button1") {
      navigate("/");
    } else if (buttonName === "button2") {
      navigate("/sponsor");
    } else if (buttonName === "button3") {
      navigate("/introduce");
    }
    // 다른 버튼에 대한 처리 로직 추가
    // onClose(); // 페이지 이동 후에 onClose 함수 호출
  };

  return (
    <div className="hideMenu">
      <div className="topMenu">
        <div className="topButton">
          <a href="" className="logIn">
            로그인
          </a>
          <div className="topIcons">
            <a href="">
              <img src="/homeBtn.png" alt="" className="homeBtn" />
            </a>
            <a href="">
              <img src="/searchBtn.png" alt="" className="searchBtn" />
            </a>
            <button onClick={onClose}>
              <img src="/xBtn.png" alt="" className="searchBtn" />
            </button>
          </div>
        </div>
        <div className="middleIcons">
          <a href="" className="mypage">
            <img src="/mypage.png" alt="" />
            마이페이지
          </a>
          <a href="" className="info">
            <img src="/info.png" alt="" />
            후원/결제정보
          </a>
          <a href="">
            <img src="/history.png" alt="" />
            후원내역
          </a>
          <a href="">
            <img src="/faq.png" alt="" />
            FAQ
          </a>
        </div>
        <button className="receiptBtn">기부금 영수증 신청</button>
      </div>
      <div className="menuList">
        <div className="menuListLeft">
          <button
            className={`button ${activeButton === "button1" ? "active" : ""}`}
            onClick={() => {
              handleButtonClick("button1");
              // onClose();
            }}
          >
            하는 일
          </button>
          <button
            className={`button ${activeButton === "button2" ? "active" : ""}`}
            onClick={() => {
              handleButtonClick("button2");
              // onClose();
            }}
          >
            후원과 참여
          </button>
          <button
            path="/introduce"
            className={`button ${activeButton === "button3" ? "active" : ""}`}
            onClick={() => {
              handleButtonClick("button3");
              // onClose();
            }}
          >
            유니세프 소개
          </button>
        </div>
        <div className="menuListRight">
          <div className={`class1 ${activeButton === "button1" ? "show" : ""}`}>
            <ul>
              <li className="closeList boldClass active ">
                전세계 모든 어린이를 위해
                <ul>
                  <li>활동지역</li>
                  <li>스쿨스 포 아시아</li>
                  <li>#OnMyMind</li>
                </ul>
              </li>
              <li className="closeList boldClass">
                차별없는 구호
                <ul>
                  <li>생존과 발달</li>
                  <li>교육</li>
                  <li>보호</li>
                  <li>안전하고 지속 가능한 환경</li>
                  <li>공평한 기회</li>
                </ul>
              </li>
              <li className="closeList boldClass">
                어린이 삶 개선
                <ul>
                  <li>기후위기 대응</li>
                  <li>이노베이션</li>
                  <li>성 평등</li>
                  <li>장애 어린이</li>
                  <li>조사와 연구</li>
                </ul>
              </li>
              <li className="closeList boldClass">
                긴급구호
                <ul>
                  <li>코로나19와 백신</li>
                  <li>인도주의 지원</li>
                  <li>난민 어린이</li>
                </ul>
              </li>

              <li className="closeList boldClass">
                한국 아동권리 증진
                <ul>
                  <li>아동권리협약 이행</li>
                  <li>정책 개선 활동</li>
                  <li>아동친화사회 만들기</li>
                  <li>권리 교육</li>
                </ul>
              </li>
              <li className="boldClass">소식</li>
              <li className="boldClass">자료실</li>
              <li className="boldClass">한국 정부 협력</li>
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
