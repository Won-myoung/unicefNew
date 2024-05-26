import { useEffect, useState } from "react";
import "./css/introduce.css";
import BgBar from "./pages/BgBar";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./css/introduce.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

export default function Introduce() {
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
  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize4024 = () => {
    const minFontSize = 24; // 최소 폰트 크기
    const maxFontSize = 40; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize3220 = () => {
    const minFontSize = 20; // 최소 폰트 크기
    const maxFontSize = 32; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize =
      minFontSize +
      ((maxFontSize - minFontSize) *
        (Math.min(1120, Math.max(windowWidth, 640)) - 640)) /
        (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize2418 = () => {
    const minFontSize = 18; // 최소 폰트 크기
    const maxFontSize = 24; // 최대 폰트 크기

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
    const minFontSize = 16; // 최소 폰트 크기
    const maxFontSize = 20; // 최대 폰트 크기

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
    const minFontSize = 14; // 최소 폰트 크기
    const maxFontSize = 16; // 최대 폰트 크기

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
    <div className="introduce">
      <BgBar />
      <div className="introTopBar">
        <h2 style={{ fontSize: calculateFontSize() }}>소개</h2>
        <p>for every child, UNICEF</p>
      </div>
      <div className="introBodyText">
        <p style={{ fontSize: calculateFontSize1614() }}>
          <span>유니세프</span>는 1946년 ‘차별 없는 구호’의 정신으로 전 세계
          어린이를 돕기 위해 설립된 유엔기구입니다. 유니세프는
          유엔아동권리협약에 직접 명시된 유일한 아동권리 증진 기관이며
          1965년에는 노벨 평화상도 수상했습니다. 약 80년의 현장 경험과 전문성을
          바탕으로 적은 돈으로 더 많은 어린이의 생명을 살립니다. 각 나라 정부와
          긴밀하게 협력해 보다 효과적으로 폭넓게 어린이의 삶을 근본적으로
          개선합니다. 약 190개 나라 및 영토 등 전 세계 거의 모든 곳에서 활동하기
          때문에 재난이 발생하면 신속하게 긴급구호 사업을 펼칩니다. 재난 전에도,
          재난 중에도, 재난 후에도 한결같이 어린이 곁을 지킵니다. 단 한 명의
          어린이도 빠짐없이, 모든 어린이가 행복한 어린 시절을 보낼 수 있도록,
          보건·영양·식수와 위생·교육·긴급구호 사업을 펼칩니다. 지금 이 순간에도
          유니세프는 전 세계 어린이를 지킵니다.
        </p>
        <p style={{ fontSize: calculateFontSize1614() }}>
          <span>유니세프한국위원회</span>는 한국에서 유니세프를 대표해
          유니세프의 이념을 실현합니다. 전 세계 어린이를 위해 기금을 모으고
          어린이 권리를 옹호합니다. 한국은 유니세프 역사상 도움을 받다가 도움을
          주는 나라로 전환된 유일한 국가입니다. 2020년에는 미국, 일본, 독일,
          영국과 함께 5대 모금대국으로 성장했으며, 전 세계 <span>33개</span>
          유니세프 국가위원회 중 높은 수준의 송금률을 자랑합니다.
          유니세프한국위원회의 대표적인 아동권리 증진 사업은
          ‘유니세프아동친화사회 만들기’ 프로젝트입니다. 어린이가 생활하는
          사회(지역사회, 학교 등)와 어린이에게 영향을 미치는 사회(기업, 병원
          등)를 어린이에게 친화적인 환경으로 만듭니다. 유니세프한국위원회는 우리
          모두가 행복한 사회를 만들기 위해 어린이가 행복한 사회를 만듭니다.
        </p>
      </div>
      <div className="introWhatDifferent">
        <h2 style={{ fontSize: calculateFontSize() }}>
          유니세프 <br />
          무엇이 다른가요?
        </h2>
        <div className="introWhatDifferentBox">
          <div className="introWhatTextBox">
            <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
            <strong style={{ fontSize: calculateFontSize4024() }}>
              신뢰할 수 있습니다
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한
              아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
            </p>
          </div>
          <div className="introWhatVisualBox">
            <img src="/introduce/introduction_img1.jpg" alt="" />
          </div>
        </div>
        <div className="introWhatDifferentBox">
          <div className="introWhatTextBox">
            <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
            <strong style={{ fontSize: calculateFontSize4024() }}>
              신뢰할 수 있습니다
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한
              아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
            </p>
          </div>
          <div className="introWhatVisualBox">
            <img src="/introduce/introduction_img2.jpg" alt="" />
          </div>
        </div>
        <div className="introWhatDifferentBox">
          <div className="introWhatTextBox">
            <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
            <strong style={{ fontSize: calculateFontSize4024() }}>
              신뢰할 수 있습니다
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한
              아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
            </p>
          </div>
          <div className="introWhatVisualBox">
            <img src="/introduce/introduction_img3.jpg" alt="" />
          </div>
        </div>
        <div className="introWhatDifferentBox">
          <div className="introWhatTextBox">
            <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
            <strong style={{ fontSize: calculateFontSize4024() }}>
              신뢰할 수 있습니다
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한
              아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
            </p>
          </div>
          <div className="introWhatVisualBox">
            <img src="/introduce/introduction_img5.jpg" alt="" />
          </div>
        </div>
        <div className="introWhatDifferentBox">
          <div className="introWhatTextBox">
            <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
            <strong style={{ fontSize: calculateFontSize4024() }}>
              신뢰할 수 있습니다
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한
              아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
            </p>
          </div>
          <div className="introWhatVisualBox">
            <img src="/introduce/introduction_img4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="introRecord">
        <h2 style={{ fontSize: calculateFontSize() }}>
          한국이
          <br />
          유니세프에서 세운 놀라운 기록
        </h2>
        <div>
          <ul className="introRecordList">
            <li style={{ fontSize: calculateFontSize1614() }}>
              첫째, 유니세프 역사상 한국은 도움을 받다가 도움을 주는 나라로
              전환한 유일한 국가입니다.
            </li>
            <li style={{ fontSize: calculateFontSize1614() }}>
              둘째, 한국은 1994년 유니세프한국위원회 설립 이후 2020년에는 미국,
              일본, 독일, 영국과 함께 5대 모금대국으로 성장했습니다.
            </li>
            <li style={{ fontSize: calculateFontSize1614() }}>
              셋째, 유니세프한국위원회는 전 세계 33개 국가위원회 중 가장 높은
              수준의 효율성을 보이고 있습니다.
            </li>
            <p style={{ fontSize: calculateFontSize1614() }}>
              한 마디로, 한국은 왜 유니세프가 존재하는지 입증해줍니다.
            </p>
          </ul>
        </div>
      </div>
      <div className="introWork">
        <h2 style={{ fontSize: calculateFontSize() }}>
          유니세프,
          <br />
          무슨 일을 하나요?
        </h2>
        <p style={{ fontSize: calculateFontSize1614() }}>
          유니세프는 모든 어린이가 행복한 세상을 위해, 유엔아동권리협약과
          지속가능발전목표를 바탕으로 4년마다 중점 사업 계획을 세워 전 세계
          어린이의 권리와 복지를 실현합니다. 한국에서 유니세프를 대표해
          유니세프의 이념을 실현하는 유니세프한국위원회는 매년 유니세프 본부의
          감사를 받으며 유니세프 사업 계획에 맞춰 기금을 모으고 아동권리를
          옹호합니다.
        </p>
        <button>유니세프 미션</button>
        <div className="introPlan">
          <div className="introPlanHead">
            <img src="/introduce/arrowTop.png" alt="" />
            <h4 style={{ fontSize: calculateFontSize2016() }}>
              유니세프 중점 사업 계획
            </h4>
          </div>
          <Swiper
            slidesPerView={"auto"}
            grid={2}
            spaceBetween={15}
            freeMode={true}
            scrollbar={true}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission01.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission02.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission03.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission04.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission05.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="introPlanItem">
              <a href="" style={{ fontSize: calculateFontSize2016() }}>
                모든 어린이의 <br />
                <span>생존과 발달</span>
                <img src="/introduce/mission05.png" alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
          <div className="introPlanHead02">
            <h4 style={{ fontSize: calculateFontSize2016() }}>범분야 사업</h4>
            <ul>
              <li className="introPlanHead02Item">
                <strong style={{ fontSize: calculateFontSize2016() }}>
                  인도주의 사업
                </strong>
                <img src="/introduce/mission06.png" alt="" />
              </li>
              <li className="introPlanHead02Item">
                <strong style={{ fontSize: calculateFontSize2016() }}>
                  성 평등 사업
                </strong>
                <img src="/introduce/mission07.png" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="introCommonPlan">
          <div className="introCommonPlanHead">
            <img src="/introduce/arrowTop.png" alt="" />
            <h4 style={{ fontSize: calculateFontSize2016() }}>
              유니세프 국가위원회 공동 전략 계획
            </h4>
          </div>
          <div className="introCommonPlanBody">
            <h5 style={{ fontSize: calculateFontSize2016() }}>기금 모음</h5>
            <div>
              <img src="/introduce/plusIcon.png" alt="" />
            </div>
            <h5 style={{ fontSize: calculateFontSize2016() }}>아동권리 옹호</h5>
          </div>
        </div>
      </div>
      <div className="introSignature">
        <div className="introSignatureHead">
          <h2 style={{ fontSize: calculateFontSize() }}>유니세프 시그니처</h2>
          <p style={{ fontSize: calculateFontSize1614() }}>
            유니세프 시그니처에는 유니세프가 추구해야 하는 가치와 역할이 담겨
            있습니다.
          </p>
        </div>
        <div className="introSignatureBody">
          <div>
            <strong style={{ fontSize: calculateFontSize2418() }}>
              엠블럼
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유니세프 엠블럼은 부모가 아이를 들어 올리는 모습으로 희망, 안전,
              기쁨을 상징합니다.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: calculateFontSize2418() }}>
              태그라인
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              ‘for every child’ 태그라인은 ‘for’는 유니세프가 최우선으로
              추구해야 하는 가치와 역할, ‘every’는 모든 어린이가 행복한 세상을
              위한 유니세프의 가치, ‘child’는 단 한 명의 어린이도 빠짐없이 차별
              없는 구호를 펼치는 유니세프의 미션을 담고 있습니다.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: calculateFontSize2418() }}>로고</strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유니세프 로고는 ‘평화’를 상징하는 컬러인 ‘유니세프 블루’로
              사용합니다.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: calculateFontSize2418() }}>
              유니세프한국위원회
            </strong>
            <p style={{ fontSize: calculateFontSize1614() }}>
              유니세프한국위원회는 유니세프 브랜드 가이드 라인에 따라 필요시
              유니세프 로고 밑에 국가명을 표기하여 사용합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
