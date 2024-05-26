import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/mainPage.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import "./css/mainPage.module.css";

// import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
  Scrollbar,
  Virtual,
} from "swiper/modules";

export default function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedButton, setSelectedButton] = useState("button01"); // 상태 추가
  const [priceText, setPriceText] = useState("30,000원"); // 상태 추가
  const [vaccineText, setVaccineText] = useState("DTP 예방백신 1,200회");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateFontSize2418 = () => {
    const minFontSize = 18;
    const maxFontSize = 24;

    // 1120에서 990 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 990)) - 990)) /
        (1120 - 990);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };

  const calculateFontSize1612 = () => {
    const minFontSize = 12;
    const maxFontSize = 16;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize1614 = () => {
    const minFontSize = 14;
    const maxFontSize = 16;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize2016 = () => {
    const minFontSize = 16;
    const maxFontSize = 20;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize3220 = () => {
    const minFontSize = 20;
    const maxFontSize = 32;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize3217 = () => {
    const minFontSize = 17;
    const maxFontSize = 32;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize4826 = () => {
    const minFontSize = 26;
    const maxFontSize = 48;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };

  //후원하기 금액 및 텍스트 교체
  // const priceSpan = document.getElementById("price");
  // const vaccinesSpan = document.getElementById("vaccines");
  const buttons = document.querySelectorAll("button");

  // 모든 버튼의 색상을 초기화
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // 텍스트 변경 하나의 아이템 고정
  /*   const handleButtonClick = (buttonNumber) => {
    // setSelectedButton(buttonNumber);
    setSelectedButton(`button0${buttonNumber}`);

    if (buttonNumber === 1) {
      setPriceText("30,000원");
      setVaccineText("결핵 예방백신 1,200회");
    } else if (buttonNumber === 2) {
      setPriceText("50,000원");
      setVaccineText("농구공 120개");
    } else if (buttonNumber === 3) {
      setPriceText("100,000원");
      setVaccineText("콜레라 진단 키트 400개");
    }
  }; */

  //텍스트변경 두번째 복수 아이템 랜덤
  // const handleButtonClick = (buttonNumber) => {
  //   setSelectedButton(buttonNumber);

  //   const prices = ["30,000원", "50,000원", "100,000원"];
  //   const vaccineOptions = [
  //     [
  //       "영양상태 측정 테이프 12,000개",
  //       "태양광램프 5개",
  //       "고영양비스킷 2,880개",
  //       "다회용 면 생리대 48세트",
  //       "영양실조치료우유 144개",
  //     ],
  //     [
  //       "농구공 120개",
  //       "비누 1,200개",
  //       "뇌수막염치료제/항생제 545병",
  //       "콜레라 진단 키트 200개",
  //       "다회용 면 생리대 80세트",
  //     ],
  //     [
  //       "책가방 300개",
  //       "말라리아 진단 키트 500개",
  //       "고영양비스킷 9,600개",
  //       "공책 800권",
  //       "DTP 예방백신 4,000회",
  //     ],
  //   ];

  //   const randomIndex = Math.floor(
  //     Math.random() * vaccineOptions[buttonNumber - 1].length
  //   );
  //   const randomVaccine = vaccineOptions[buttonNumber - 1][randomIndex];

  //   setPriceText(prices[buttonNumber - 1]);
  //   // 버튼 번호에 따라 가격 설정
  //   setVaccineText(randomVaccine);
  //   // 랜덤하게 백신 정보 설정
  // };

  //버튼 색 유지 및 텍스트 랜덤교체

  // 랜덤한 백신 정보들
  const vaccineOptions = [
    [
      "DTP 예방백신 1,200회",
      "다테토스 백신 300회",
      "폴리오 예방백신 700회",
      "BCG 예방백신 500회",
    ],
    [
      "인플루엔자 백신 1,000회",
      "수두 예방백신 400회",
      "홍역 예방백신 800회",
      "수막구균 예방백신 600회",
    ],
    [
      "티푸스 백신 600회",
      "파상풍 백신 900회",
      "장티푸스 백신 400회",
      "말라리아 백신 200회",
    ],
  ];

  // 버튼 클릭 핸들러 함수
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId); // 선택된 버튼 업데이트

    // 각 버튼에 맞는 가격과 랜덤한 백신 정보 설정
    switch (buttonId) {
      case 1:
        setPriceText("30,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[0]));
        break;
      case 2:
        setPriceText("50,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[1]));
        break;
      case 3:
        setPriceText("100,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[2]));
        break;
      default:
        break;
    }
  };

  // 랜덤한 백신 정보 반환 함수
  const getRandomVaccineText = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  return (
    <div className="mainPageWrap">
      <div className="mainCover01wrap">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mainCover01"
        >
          <SwiperSlide className="mainCoverItem cover01">
            <div>
              <h2>하나일 때 더 빛나는 유니세프 팀 반지</h2>
              <p>유니세프 팀 반지로 당신의 선한 영향력을 보여주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem cover02">
            <div>
              <h2>모든 어린이와 함께하는 유니세프 팀 팔찌</h2>
              <p>가족과 함께 어린이들 이야기에 귀 기울여주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem cover03">
            <div>
              <h2>어린이의 생명을 살리는 '출발점'</h2>
              <p>굶주린 어린이를 위해 출발점을 만들어주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem cover04">
            <div>
              <h2>가자지구 긴급구호</h2>
              <p>참혹한 분쟁으로 위험에 처한 어린이를 구해주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainCover02wrap">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={false}
          navigation={false}
          modules={[Pagination, Autoplay]}
          className="mainCover02"
        >
          <SwiperSlide className="mainCoverItem thumCover01">
            <div>
              <h2>하나일 때 더 빛나는 유니세프 팀 반지</h2>
              <p>유니세프 팀 반지로 당신의 선한 영향력을 보여주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem thumCover02">
            <div>
              <h2>모든 어린이와 함께하는 유니세프 팀 팔찌</h2>
              <p>가족과 함께 어린이들 이야기에 귀 기울여주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem thumCover03">
            <div>
              <h2>어린이의 생명을 살리는 '출발점'</h2>
              <p>굶주린 어린이를 위해 출발점을 만들어주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem thumCover04">
            <div>
              <h2>가자지구 긴급구호</h2>
              <p>참혹한 분쟁으로 위험에 처한 어린이를 구해주세요</p>
              <button type="button">자세히 보기</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainSponsor">
        <div className="mainSponsorSelect ">
          <div className="selectMoney">
            <div className="selectBox">
              <select name="" id="">
                <option value="">정기</option>
                <option value="">일시</option>
              </select>
            </div>
            <div className="sponsorCenterbox">
              <ul>
                <li>
                  <button
                    id="button01"
                    onClick={() => handleButtonClick(1)} // 버튼 클릭 핸들러 연결
                    className={selectedButton === 1 ? "active" : ""}
                  >
                    30,000원
                  </button>
                </li>
                <li>
                  <button
                    id="button02"
                    onClick={() => handleButtonClick(2)} // 버튼 클릭 핸들러 연결
                    className={selectedButton === 2 ? "active" : ""}
                  >
                    50,000원
                  </button>
                </li>
                <li>
                  <button
                    id="button03"
                    onClick={() => handleButtonClick(3)} // 버튼 클릭 핸들러 연결
                    className={selectedButton === 3 ? "active" : ""}
                  >
                    100,000원
                  </button>
                </li>
                <li>
                  <input type="text" placeholder="금액직접입력" />
                </li>
              </ul>
              <div className="sponsorBodyText">
                <strong>
                  월 <span id="price">{priceText}</span>이면, 전 세계 어린이를
                  위해
                  <span id="vaccines"> {vaccineText}</span>를 지원할 수
                  있습니다.
                </strong>
              </div>
            </div>
          </div>
          <div className="sponsorButton">
            <strong>후원하기</strong>
          </div>
        </div>
      </div>

      <div className="mainBodyUN">
        <div className="mainBodyUNHead">
          <h2 style={{ fontSize: calculateFontSize4826() }}>
            <span>UN공식</span>기관
            <br />
            유니세프
          </h2>
          <p>
            유엔아동권리협약에 유일하게 명시된 아동권리 증진기구 유니세프,
            <br />
            후원자님의 소중한 후원금으로 전 세계 어린이 및 한국 어린이를
            돕습니다.
          </p>
        </div>
        <div className="mainBodyUNThum">
          <div>
            <div className="imageWrap">
              <img src="/main/un01.png " alt="" className="w130120" />
            </div>
            <strong>
              <span>UN 공식 기관</span>으로
              <span>약 80년의 구호 활동 경험과 전문성</span>
            </strong>
          </div>
          <div>
            <div className="imageWrap w170">
              <img src="/main/un02.png " alt="" />
            </div>
            <strong>
              <span>유엔아동권리협약에 직접 명시</span>된 유일한 아동권리증진
              기관
            </strong>
          </div>
          <div>
            <div className="imageWrap">
              <img src="/main/un03.png " alt="" className="w120120" />
            </div>
            <strong>
              유니세프 본부 및 외부 회계 법인 감사로
              <span>후원금 사용의 투명성 검증</span>
            </strong>
          </div>
          <div>
            <div className="imageWrap">
              <img src="/main/un04.jpg" alt="" className="w120120" />
            </div>
            <strong>
              2023 대한민국 국가사회산업공헌 대상 비영리 기관
              <span> '세계 어린이 구호' 부문 3년 연속 수상</span>
            </strong>
          </div>
          <div>
            <div className="imageWrap">
              <img src="/main/un05.png" alt="" className="w120120" />
            </div>
            <strong>
              2022년 원조투명성지수 평가 에서
              <span>2회 연속 최상위 등급 (Very Good) 획득</span>
            </strong>
          </div>
        </div>
        <div className="mainBodyUNLink">
          <div className="unLinkWrap">
            <div>
              <p style={{ fontSize: calculateFontSize1612() }}>
                유니세프 팩트체크
              </p>
              <strong style={{ fontSize: calculateFontSize3217() }}>
                유니세프, 믿을 수 있나요?
              </strong>
            </div>
            <img src="/main/unbtnimg01.png" alt="" />
          </div>
          <div className="unLinkWrap">
            <div>
              <p style={{ fontSize: calculateFontSize1612() }}>
                후원금 사용 내역
              </p>
              <strong style={{ fontSize: calculateFontSize3217() }}>
                후원금은 어떻게 쓰이나요?
              </strong>
            </div>
            <img src="/main/unbtnimg02.png" alt="" />
          </div>
        </div>
      </div>

      <div className="mainChant">
        <h2 style={{ fontSize: calculateFontSize4826() }}>
          유니세프 구호 현장
        </h2>
        <Swiper
          slidesPerView={1}
          pagination={false}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={1000}
        >
          <SwiperSlide className="mainChantSwiper chantSlide03">
            <div className="mainChantSwiperTitle">
              <h3 style={{ fontSize: calculateFontSize3220() }}>
                지금 <span>가자지구</span>는
              </h3>
            </div>
            <div className="mainChantSwiperBody">
              <div className="mainChantYoutube">
                <iframe
                  width="100%"
                  height="272"
                  src="https://www.youtube.com/embed/j28UkZAxQJQ"
                  title=""
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mainChantSwiperBodyItem">
                <ul>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 발생 1년이 지난 지금, 아직도
                      수많은 어린이와 가족들은 고통받고 있습니다
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [스토리] 후원자님께 전하는 튀르키예·시리아 지진 6개월 현장
                      이야기
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 100일, 끝나지 않은 절망 속에
                      사는 수백만 명의 어린이
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [보도자료] 김연아 유니세프 국제친선대사 자선 경매 수익금
                      기부 ‘튀르키예·시리아
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainChantSwiper chantSlide03">
            <div className="mainChantSwiperTitle">
              <h3 style={{ fontSize: calculateFontSize3220() }}>
                지금 <span>우크라이나</span>는
              </h3>
            </div>
            <div className="mainChantSwiperBody">
              <div className="mainChantYoutube">
                <iframe
                  width="100%"
                  height="272"
                  src="https://www.youtube.com/embed/3vWCyEQnpWo"
                  title=""
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mainChantSwiperBodyItem">
                <ul>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 발생 1년이 지난 지금, 아직도
                      수많은 어린이와 가족들은 고통받고 있습니다
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [스토리] 후원자님께 전하는 튀르키예·시리아 지진 6개월 현장
                      이야기
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 100일, 끝나지 않은 절망 속에
                      사는 수백만 명의 어린이
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [보도자료] 김연아 유니세프 국제친선대사 자선 경매 수익금
                      기부 ‘튀르키예·시리아
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mainChantSwiper chantSlide03">
            <div className="mainChantSwiperTitle">
              <h3 style={{ fontSize: calculateFontSize3220() }}>
                지금 <span>튀르키예·시리아</span>는
              </h3>
            </div>
            <div className="mainChantSwiperBody">
              <div className="mainChantYoutube">
                <iframe
                  width="100%"
                  height="272"
                  src="https://www.youtube.com/embed/rGIkyObj-0M"
                  title=""
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mainChantSwiperBodyItem">
                <ul>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 발생 1년이 지난 지금, 아직도
                      수많은 어린이와 가족들은 고통받고 있습니다
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [스토리] 후원자님께 전하는 튀르키예·시리아 지진 6개월 현장
                      이야기
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [뉴스] 튀르키예·시리아 지진 100일, 끝나지 않은 절망 속에
                      사는 수백만 명의 어린이
                    </p>
                  </li>
                  <li>
                    <p style={{ fontSize: calculateFontSize1614() }}>
                      [보도자료] 김연아 유니세프 국제친선대사 자선 경매 수익금
                      기부 ‘튀르키예·시리아
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainUniNews">
        <div className="mainUniNewsWrap">
          <div>
            <h2 style={{ fontSize: calculateFontSize4826() }}>유니세프 소식</h2>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            freeMode={false}
            scrollbar={true}
            navigation={true}
            modules={[FreeMode, Navigation, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews01.png" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews02.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews03.png" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img
                  className="newsCover coverNo4"
                  src="/main/uninews04.jpg"
                  alt=""
                />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews05.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews06.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews07.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews08.png" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews09.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews10.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews11.png" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainNewsItem">
              <a href="">
                <img src="/main/uninews12.jpg" alt="" className="newsCover" />
                <strong>스토리</strong>
                <div className="mainNewsTextbox">
                  <p>
                    우리나라 기업은 아동을 얼마나 생각할까?: '2023
                    유니세프아동친화기업 지수' 보고...
                  </p>
                  <span>2024.05.21</span>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mainChild">
        <h2 style={{ fontSize: calculateFontSize4826() }}>
          유니세프아동친화사회 만들기
        </h2>
        <p style={{ fontSize: calculateFontSize1614() }}>
          유니세프아동친화사회 만들기 사업은 아동이 생활하는 사회(지역사회, 학교
          등)와 아동에게 영향을 미치는 사회(기업 등)를 모두 아동에게 친화적인
          환경으로 만들기 위한 프로젝트입니다. 유니세프한국위원회는 이러한 목적
          달성을 위해 유니세프아동친화도시, 유니세프아동친화학교,
          유니세프아동친화기업 등을 추진하며 점차 그 영역을 확대해 나가고
          있습니다.
        </p>
        <div className="childProjectName">
          <div>
            <div>
              <img src="/main/child01.png" alt="" />
            </div>
            <p>유니세프아동친화도시</p>
          </div>
          <div>
            <div>
              <img src="/main/child02.png" alt="" />
            </div>
            <p>유니세프아동친화학교</p>
          </div>
          <div>
            <div className="childCover170200">
              <img src="/main/child03.jpg" alt="" />
            </div>
            <p>유니세프아동친화기업</p>
          </div>
        </div>
      </div>

      <div className="mainEvent">
        <div className="mainEventWrap">
          <h2 style={{ fontSize: calculateFontSize4826() }}>이벤트/캠페인</h2>
          <div className="mainEventBody">
            <img className="btsCover" src="/main/event01.png" alt="" />
            <div className="mainEventText">
              <h2 style={{ fontSize: calculateFontSize2418() }}>
                빅히트 뮤직·방탄소년단의 행보에{" "}
                <br className="hide-on-desktop" />
                동참해주세요!
              </h2>
              <p style={{ fontSize: calculateFontSize2016() }}>
                Donate together with BigHit Music·BTS
              </p>
              <div className="btnWrap">
                <a href="#">후원하기</a>
                <a href="#">Donate</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainUniBanner">
        <div className="mainUniBannerWrap">
          <Swiper
            slidesPerView={"2"}
            spaceBetween={40}
            freeMode={false}
            scrollbar={true}
            navigation={true}
            modules={[FreeMode, Navigation, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="mainBannerItem">
              <a href="#">
                <img src="/main/banner01.gif" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainBannerItem">
              <a href="#">
                <img src="/main/banner02.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainBannerItem">
              <a href="#">
                <img src="/main/banner03.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainBannerItem">
              <a href="#">
                <img src="/main/banner04.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainBannerItem">
              <a href="#">
                <img src="/main/banner05.jpg" alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mainUniPeople">
        <div className="mainUniPeopleWrap">
          <div>
            <h2 style={{ fontSize: calculateFontSize4826() }}>
              유니세프와 사람들
            </h2>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            freeMode={false}
            scrollbar={true}
            navigation={true}
            modules={[FreeMode, Navigation, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="mainPeopleItem">
              <a href="">
                <img src="/main/people01.png" alt="" className="peopleCover" />
                <strong>친선대사</strong>
                <div className="mainPeopleTextbox">
                  <p>
                    “도와야할 어린이가 있다면 저는 언제나 유니세프와 함께 일할
                    겁니다.”
                  </p>
                  <span>--안성기 친선대사</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainPeopleItem">
              <a href="">
                <img src="/main/people02.png" alt="" className="peopleCover" />
                <strong>친선대사</strong>
                <div className="mainPeopleTextbox">
                  <p>
                    “두려움 속에서 하루하루를 견뎌내고 있는 어린이들이 하루빨리
                    일어서는 데 힘이 되길 바랍니다.”
                  </p>
                  <span>--김혜수 친선대사</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainPeopleItem">
              <a href="">
                <img src="/main/people03.png" alt="" className="peopleCover" />
                <strong>후원자</strong>
                <div className="mainPeopleTextbox">
                  <p>
                    “라오스 현장 방문에서 직접 본 열정적인 직원들과 투명한
                    시스템에 감동했어요.”
                  </p>
                  <span>--권채근 후원자</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainPeopleItem">
              <a href="">
                <img
                  className="newsCover coverNo4"
                  src="/main/people04.png"
                  alt=""
                />
                <strong>기업 파트너십</strong>
                <div className="mainPeopleTextbox">
                  <p>
                    “글로벌 프랜차이저로서 책임감을 가지고 전 세계 어린이 문제
                    해결에 기여하고 싶습니다.”
                  </p>
                  <span>--BGF리테일 기업 파트너십</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="mainPeopleItem">
              <a href="">
                <img src="/main/people05.png" alt="" className="peopleCover" />
                <strong>유니캐스터</strong>
                <div className="mainPeopleTextbox">
                  <p>
                    “어린이를 위한 유니세프의 보건·의료 지원 활동을 널리 알리는
                    데 함께하고 있습니다.”
                  </p>
                  <span>--닥터프렌즈 유니캐스터</span>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mainBgPattern">
        <img src="./main/bgPattern.png" alt="" />
      </div>

      <div className="mainThumPicture">
        <ul>
          <li>
            <p>기업-기관 사회공헌</p>
          </li>
          <li>
            <p>고액-아너스클럽</p>
          </li>
          <li>
            <p>유산-추모기부</p>
          </li>
        </ul>
      </div>

      <div className="mainCompany">
        <div className="mainCompanyWrap">
          <Swiper
            // slidesPerView={5}
            spaceBetween={20} // 슬라이드 간의 간격
            loop={true} // 무한 반복
            autoplay={{
              delay: 3000, // 최소값으로 설정하여 부드럽게 움직이게 함
              disableOnInteraction: true,
            }}
            speed={1000} // 슬라이드 이동 속도
            freeMode={false}
            // freemodemomentum={true}
            // 자유 모드에서 관성 효과 비활성화
            // loopAdditionalSlides={2}
            modules={[Autoplay, FreeMode]} // 필요한 모듈 추가
            className="mySwiper"
            breakpoints={{
              1: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              784: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo01.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo02.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo03.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo04.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo05.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo06.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo07.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo08.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="companySwiperItem">
              <img src="./main/logos/logo09.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mainWith">
        <div className="mainWithWrap">
          <h3 style={{ fontSize: calculateFontSize3220() }}>
            유니세프와 함께하는 소식을 놓치지 마세요
          </h3>
          <div>
            <div>
              <div className="mainWithInputWrap">
                <input
                  type="text"
                  placeholder="이름 입력"
                  className="mainWithInput01"
                />
                <input
                  type="text"
                  placeholder="이메일 입력"
                  className="mainWithInput02"
                />
              </div>
              <p>
                소식 전달을 목적으로 이름, 이메일주소를 수집하며, 수신거부 시
                까지 이용 ∙보유합니다.
              </p>
            </div>
            <button>소식 받아보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
