import { BrowserRouter as Router, Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <Router>
      <div className="footer">
        <div>
          <div className="footerIcon">
            <Link to="/경로" className="iconInsta icon">
              <img src="/insta.png" alt="" />
            </Link>
            <Link to="/경로" className="iconYoutube icon">
              <img src="/youtube.png" alt="" />
            </Link>
            <Link to="/경로" className="iconFacebook icon">
              <img src="/facebook.png" alt="" />
            </Link>
            <Link to="/경로" className="iconTwitter icon">
              <img src="/twitter.png" alt="" />
            </Link>
          </div>
          <div>
            <ul className="footerTop footerText">
              <li>이용약관</li>
              <li>개인정보 처리방침</li>
              <li>오시는 길</li>
              <li>FAQ</li>
              <li>사이트맵</li>
              <li className="removeAfter">후원문의 02.737.1004</li>
              <li className="removeAfter">공익제보</li>
            </ul>
            <ul className="footerMiddle footerText">
              <li>사단법인 유니세프한국위원회</li>
              <li>대표자 : 정갑영</li>
              <li>고유번호 : 102-82-07606</li>
              <li>[04099] 서울시 마포구 서강로 60(창전동)</li>
            </ul>
            <p className="footerBottom footerText">
              COPYRIGHT @ THE KOREAN COMMITTEE FOR UNICEF. ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Footer;
