import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="w-[1280px] mx-auto mt-[100px] py-[30px]">
        <div className="flex justify-between flex-wrap">
          <ul className="text-2lg font-semibold text-white flex gap-[2rem] flex-wrap">
            <li>
              <a href="https://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=1069&">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="https://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=1068&">
                이용약관
              </a>
            </li>
            <li>
              <a href="https://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=1070&">
                저작권안내
              </a>
            </li>
            <li>
              <a href="https://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=1807">
                관광불편신고
              </a>
            </li>
          </ul>
          <ul className="text-2lg font-semibold text-white flex gap-[2rem]">
            <li>
              <a href="https://knto.or.kr/index">관광안내전화 1330</a>
            </li>

            <li>
              <a href="https://www.e-gen.or.kr/egen/holiday_medical.do?emergencyViewYn=Y">
                응급전화안내
              </a>{" "}
              1339
            </li>
          </ul>
        </div>
        <hr className="text-gray-500 my-[1rem]" />
        <div className="flex justify-between items-end">
          <div>
            <p className="text-2lg font-semibold text-gray-300">
              [38102] 경상북도 경주시 양정로 260(동천동,경주시청)
            </p>
            <p className="text-2lg font-semibold text-gray-300">
              대표전화 : 054-779-8585
            </p>
            <p className="text-md text-gray-300">
              Copyright 2019 Gyeongju Tourguide. All rights reserved.
            </p>
          </div>
          <div className="flex gap-[0.8rem]">
            <a
              className="bg-[url('/images/youtube.png')]"
              href="https://www.youtube.com/channel/UCQh-jbXM1DkVnC8vUYqfkVw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/youtube.png" className="w-10" alt="" />
            </a>

            <a
              href="https://www.facebook.com/gj.tour1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" className="w-10" alt="" />
            </a>
            <a
              href="https://blog.naver.com/gj_tour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/blog.png" className="w-10" alt="" />
            </a>
            <a
              href="https://www.instagram.com/gj_tour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram.png" className="w-10" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
