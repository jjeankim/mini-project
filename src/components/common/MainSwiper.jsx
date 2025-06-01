import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

const images = [
  {
    src: "/images/main1.jpg",
    title: "황리단길의 매력",
    subTitle: "트렌디한 카페와 맛집으로 가득한 핫플레이스",
  },
  {
    src: "/images/main2.jpg",
    title: "월정교의 고요한 낮",
    subTitle: "고풍스러운 다리와 함께 흐르는 고요한 물결",
  },
  {
    src: "/images/main3.jpg",
    title: "첨성대의 이야기",
    subTitle: "천년의 시간을 품은 신비로운 별자리 관측소",
  },
];

const MainSwiper = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="relative flex items-center bg-green-100 h-[600px] mt-[112px] overflow-visible">
      {/* 왼쪽 텍스트: 현재 슬라이드의 타이틀/서브타이틀 */}
      <div className="flex-1 px-12 z-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          {images[currentIndex].title}
        </h2>
        <p className="text-lg text-gray-700">{images[currentIndex].subTitle}</p>
      </div>

      {/* 오른쪽 스와이퍼 */}
      <div className="absolute top-[50px] right-[50px] w-[50%] h-[700px] shadow-lg z-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          className="w-full h-full"
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt={`Slide ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 스와이퍼 네비게이션 */}
        <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 bg-gray-300 opacity-[0.5] px-3 py-5 rounded z-10 text-2xl">
          &lt;
        </button>
        <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 bg-gray-300 opacity-[0.5] px-3 py-5 rounded z-10 text-2xl">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MainSwiper;
