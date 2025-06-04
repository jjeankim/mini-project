import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainCardList from "./MainCardList";
import { SIGHT_SEEING_BASE_URL, TRENDING_BASE_URL } from "../../constant/url";

const images = [
  {
    src: "/images/main1.jpg",
    title: "황리단길의 매력",
    subTitle: "우리가 찾던던 핫플레이스 🔥",
    bgColor: "bg-yellow-50",
    to: "/trending",
  },
  {
    src: "/images/main2.jpg",
    title: "월정교의 고요한 낮 ",
    subTitle: "고풍스러운 다리와 함께 흐르는 고요한 물결 🏯",
    bgColor: "bg-green-50",
    to: "/sightseeing",
  },
  {
    src: "/images/main3.jpg",
    title: "첨성대의 이야기 ",
    subTitle: "천년의 시간 🌟",
    bgColor: "bg-blue-50",
    to: "/sightseeing",
  },
];

const MainSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div
        className={`relative h-[600px] mt-[70px] ${images[currentIndex].bgColor}`}
      >
        <div className="w-[1280px] mx-auto my-0 flex items-center justify-between">
          <div className="">
            <span className=" bg-black text-white text-2lg py-[0.5rem] px-[0.8rem] rounded-2xl rounded-bl">
              {images[currentIndex].subTitle}
            </span>
            <h2 className="mt-[40px] text-[50px] font-bold mb-4 text-gray-800">
              {images[currentIndex].title}
            </h2>
            <Link
              to={images[currentIndex].to}
              className="text-lg text-gray-400 underline underline-offset-[6px]"
            >
              자세히 보기
            </Link>
          </div>
          <div className="w-[800px] relative top-[120px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              // className="w-full h-full"
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
              }}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              // loof={"true"}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img.src}
                    alt={`Slide ${i + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-prev absolute bottom-[8%] left-[-12rem] z-30">
              &lt;
            </button>
            <span className="absolute bottom-[8%] left-[-9rem] z-30">||</span>
            <button className="custom-next absolute bottom-[8%] left-[-6rem] z-30">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[260px] mx-auto w-[1280px]">
        <div>
          <h2 className="text-3xl font-semibold bg-green-100 text-white rounded p-[16px]">
            천년고도 경주를 즐기자!
          </h2>
        </div>
        <div className="flex flex-col gap-[20px] mt-[40px]">
          <MainCardList
            url={`${TRENDING_BASE_URL}&pageNo=1&numOfRows=5`}
            title="황리단길 | 핫플레이스"
            type="핫플레이스"
          />
          <MainCardList
            url={`${SIGHT_SEEING_BASE_URL}&pageNo=1&numOfRows=5`}
            title="경주 여행하기 좋은 곳"
            type="관광지"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSwiper;
