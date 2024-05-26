import React from "react";
import "./ImageSlider.css"; // 스타일 파일 import

function ImageSlider() {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/club01.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
