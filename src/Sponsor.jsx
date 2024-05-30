import React, { /* useRef,  */ useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";

import "./css/sponsor.css";

// import required modules
import {
  FreeMode,
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import BgBar from "./pages/BgBar";

function Sponsor() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* swiper 갯수컨트롤 */
  const calculateSlidesPerView = () => {
    if (windowWidth >= 990) {
      return 4;
    } else if (windowWidth >= 640) {
      return 3;
    } else {
      return 2;
    }
  };

  /* width로 990px이하 <br/> 추가,줄바꿈 */
  const slidesPerView = calculateSlidesPerView();
  const shouldAddLineBreak = windowWidth > 990;
  const shouldAddLineBreakReverse = windowWidth < 990;

  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize = () => {
    const minFontSize = 28; // 최소 폰트 크기
    const maxFontSize = 48; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };

  return (
    <div className="sponsor">
      <BgBar />
      <div className="sponsorTopBar">
        <h2 style={{ fontSize: calculateFontSize() }}>고액·아너스클럽</h2>
        <p>for every child, honor's club</p>
      </div>
      <div className="sponsorBodyWrap">
        <div className="sponsorBody01">
          <div>
            <h2 style={{ fontSize: calculateFontSize() }}>
              가장 특별한 리더들의 모임, <br />
              유니세프 아너스클럽
            </h2>
            <p>
              유니세프 아너스클럽은 큰 나눔으로 세상의 변화를 이끄는
              {shouldAddLineBreak && <br />}후원자들의 모임으로 1억 원 이상
              기부하신 회원들로 구성됩니다. <br />
              어린이를 돕는 가장 가치 있고 명예로운 모임! <br />
              유니세프 아너스클럽의 회원이 되어주세요.
            </p>
          </div>
          <div className="sponsorHonor">
            <img src="/honorsclubimg.png" alt="" />
          </div>
        </div>
        <div className="sponsorBody02">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xNCS1K-t3XY?si=uguKPTXMdgPVVL6W"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="sponsorBody03">
          <h2 style={{ fontSize: calculateFontSize() }}>아너스클럽 자격조건</h2>
          <div className="sponsorMember">
            <div className="sponsorMember01">
              {/* <img src="/member01.png" alt="" /> */}
              <div>
                <strong>정회원</strong>
                <p>
                  일시후원 또는 누적 후원금액이{" "}
                  {shouldAddLineBreakReverse && <br />}
                  <span>1억 원 이상</span>
                  개인후원자
                </p>
              </div>
            </div>
            <div className="sponsorMember02">
              {/* <img src="/member02.png" alt="" /> */}
              <div>
                <strong>약정회원</strong>
                <p>
                  5년 내 <span>1억 원 이상</span> 후원을 약정한
                  {shouldAddLineBreakReverse && <br />} 개인후원자
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsorBody04">
        <div className="sponsorBody04Wrap">
          <h2 style={{ fontSize: calculateFontSize() }}>
            유니세프 아너스클럽 회원이 되시면
          </h2>
          <Swiper
            slidesPerView={"auto"}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={15}
            freeMode={true}
            scrollbar={{ draggable: true }}
            // pagination={{ clickable: true }}
            pagination={false}
            /*             breakpoints={{
              640: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
                freeMode: true,
                spaceBetween: 15,
              },
            }} */
            modules={[Grid, Pagination, FreeMode, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="sponsorClubItem">
              <img src="/club01.png" alt="" />
              <strong>유니세프 사업 현장 방문</strong>
              <p>
                내 후원금이 쓰이는 현장을 찾아 직접 어린이들을 만나고, 그로 인한
                변화를 눈으로 확인하실 수 있습니다.
              </p>
            </SwiperSlide>
            <SwiperSlide className="sponsorClubItem">
              <img src="/club02.png" alt="" />
              <strong>유니세프 활동 보고서 제공</strong>
              <p>
                유니세프의 활동과 성과에 대한 보고서를 제공받아 후원금의 사용
                내역을 확인할 수 있습니다.
              </p>
            </SwiperSlide>
            <SwiperSlide className="sponsorClubItem">
              <img src="/club03.png" alt="" />
              <strong>유니세프 소식지 발송</strong>
              <p>
                유니세프의 최신 소식과 활동 내용을 담은 소식지를 정기적으로
                받아볼 수 있습니다.
              </p>
            </SwiperSlide>
            <SwiperSlide className="sponsorClubItem">
              <img src="/club04.png" alt="" />
              <strong>유니세프 캠페인 초청</strong>
              <p>유니세프가 주최하는 다양한 캠페인과 행사에 초청됩니다.</p>
            </SwiperSlide>
            <SwiperSlide className="sponsorClubItem">
              <img src="/club05.png" alt="" />
              <strong>기념품 제공</strong>
              <p>후원 감사의 의미로 유니세프 기념품이 제공됩니다.</p>
            </SwiperSlide>
            <SwiperSlide className="sponsorClubItem">
              <img src="/club06.png" alt="" />
              <strong>후원 증서 발급</strong>
              <p>후원자로서의 감사와 자부심을 담은 후원 증서가 발급됩니다.</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="sponsorBody05">
        <div>
          <h2 style={{ fontSize: calculateFontSize() }}>함께하는 분들</h2>
          <ul className="people">
            <li>
              <img src="/people/01.png" alt="" />
              <p>
                유니세프한국위원회 친선대사
                <br /> 배우 안성기
              </p>
            </li>
            <li>
              <img src="/people/02.png" alt="" />
              <p>
                유니세프한국위원회 친선대사
                <br />
                배우 김혜수
              </p>
            </li>
            <li>
              <img src="/people/03.png" alt="" />
              <p>
                유니세프 국제친선대사
                <br />
                김연아 前국가대표
              </p>
            </li>
            <li>
              <img src="/people/04.png" alt="" />
              <p>
                유니세프동아시아태평양지역 친선대사
                <br />
                배우 최시원
              </p>
            </li>
            <li>
              <img src="/people/05.png" alt="" />
              <p>
                유니세프한국위원회 특별대표
                <br />
                배우 원빈
              </p>
            </li>
            <li>
              <img src="/people/06.png" alt="" />
              <p>아모레퍼시픽 서경배 회장</p>
            </li>
            <li>
              <img src="/people/07.png" alt="" />
              <p>배우 설경구</p>
            </li>
            <li>
              <img src="/people/08.png" alt="" />
              <p>배우 송윤아</p>
            </li>
            <li>
              <img src="/people/09.png" alt="" />
              <p>배우 이민호</p>
            </li>
            <li>
              <img src="/people/10.png" alt="" />
              <p>배우 장근석</p>
            </li>
            <li>
              <img src="/people/11.png" alt="" />
              <p>배우 송중기</p>
            </li>
            <li>
              <img src="/people/12.png" alt="" />
              <p>배우 이혜리</p>
            </li>
            <li>
              <img src="/people/13.png" alt="" />
              <p>화가 김병종</p>
            </li>
            <li>
              <img src="/people/14.png" alt="" />
              <p>배우 한지민</p>
            </li>
            <li>
              <img src="/people/15.png" alt="" />
              <p>배우 박서준</p>
            </li>
            <li>
              <img src="/people/16.png" alt="" />
              <p>배우 수지</p>
            </li>
            <li>
              <img src="/people/17.png" alt="" />
              <p>배우 지창욱</p>
            </li>
            <li>
              <img src="/people/18.png" alt="" />
              <p>축구선수 김민재</p>
            </li>
            <li>
              <img src="/people/19.png" alt="" />
              <p>한문학자 故 이대봉</p>
            </li>
          </ul>
          <p>
            기업인과 문화예술인, 스포츠선수 등 각 분야의 유명인사들이 참여하고
            있으며 이 밖에 일반 시민들도 큰 나눔으로 아너스클럽에 함께하고
            있습니다.
          </p>
        </div>
      </div>
      <div className="sponsorBody06">
        <div>
          <h2 style={{ fontSize: calculateFontSize() }}>
            고액·아너스클럽 문의
          </h2>
          <div className="gridContainer">
            <div className="gridItem">
              <h4>성명</h4>
              <input type="text" placeholder="성명입력" />
            </div>
            <div className="gridItem empty">
              <h4>연락처</h4>
              <input type="text" placeholder="연락처 입력('-'제외)" />
            </div>
            <div className="gridItem">
              <h4>연락처</h4>
              <input type="text" placeholder="연락처 입력('-'제외)" />
            </div>
            <div className="gridItem">
              <h4>이메일</h4>
              <input type="text" placeholder="이메일주소 입력" />
            </div>
          </div>
          <div className="gridCheckbox">
            <input type="checkbox" />
            <p>
              예, 저는 아너스클럽 안내를 받고 싶습니다. 그리고 안내를 원치 않을
              시, 언제든지 수신거부 할 수 있음을 잘 알고 있습니다.
            </p>
          </div>
          <div className="buttonWrap">
            <button className="inquireButton">문의하기</button>
          </div>
        </div>
      </div>

      <div className="sponsorBody09">
        <div>
          <h2 style={{ fontSize: calculateFontSize() }}>최근 소식</h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          freeMode={false}
          loop={false}
          navigation={true}
          // scrollbar={{
          //   hide: false,
          // }}
          scrollbar={true}
          /* start */

          // autoHeight={true} // 현재 활성 슬라이드높이 맞게 높이조정
          // a11y={false} // 접근성 매개변수(접근성 관련 대체 텍스트 설정이 가능)
          // resistance={false} // 슬라이드 터치 저항 여부
          // slideToClickedSlide={true} // 해당 슬라이드 클릭시 슬라이드 위치로 이동
          // allowTouchMove={true} // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
          // watchOverflow = {true}// 슬라이드가 1개 일 때 pager, button 숨김 여부 설정

          // slidesOffsetBefore = {number} // 슬라이드 시작 부분 여백

          // slidesOffsetAfter = {number}
          /* end */
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/01.jpg" alt="" />
              <strong>
                스트레이 키즈 필릭스 유니세프 한국위원회에 1억 원 기부
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/06.jpg" alt="" />
              <strong>
                방탄소년단 지민 유니세프한국위원회에 1억 원 기부
                ‘튀르키예·시리아 지진 피해 어린이 긴급구호’ 동참
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/05.jpg" alt="" />
              <strong>
                방탄소년단 제이홉 유니세프한국위원회에 1억 원 기부
                ‘튀르키예·시리아 지진 피해 어린이 긴급구호’ 동참
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup transformImg">
              <img src="/news/07.jpg" alt="" />
              <strong>
                배우 지창욱 유니세프한국위원회에 1억 원 기부 ‘튀르키예·시리아
                지진 피해 어린이 긴급구호’ 동참
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/04.jpg" alt="" />
              <strong>
                수지 유니세프한국위원회 ‘튀르키예·시리아 지진피해 어린이
                긴급구호’ 1억원 기부
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup ">
              <img src="/news/08.png" alt="" />
              <strong>
                송윤아설경구 유니세프한국위원회에 5천만원 기부 ‘튀르키예·시리아
                지진피해 어린이 긴급구호’ 동참
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/02.png" alt="" />
              <strong>
                김연아 유니세프 친선대사 튀르키예시리아 지진 피해 어린이
                긴급구호 유니세프한국위원회에 미화 10만 달러 기부
              </strong>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsGroup">
              <img src="/news/03.jpg" alt="" />
              <strong>
                배우 박서준 튀르키예시리아 지진 피해 어린이 긴급구호 1억원 기부
              </strong>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Sponsor;
