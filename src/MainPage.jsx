import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./css/mainPage.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function MainPage() {
  return (
    <>
      <div className="mainCover01wrap">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 2000, // 간격을 밀리초 단위로 지정
            disableOnInteraction: true, // 사용자 상호 작용 후에도 자동 재생 유지
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mainCover01"
        >
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCover01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCover02.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCover03.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCover04.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mainCover02wrap">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 2000, // 간격을 밀리초 단위로 지정
            disableOnInteraction: true, // 사용자 상호 작용 후에도 자동 재생 유지
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mainCover02"
        >
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCoverThum01.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCoverThum02.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCoverThum03.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="mainCoverItem">
            <img src="/main/mainCoverThum04.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
