import { Link } from "react-router-dom";
import Weather from "../home/Weather";

const navList = [
  {
    id: 1,
    title: "테마별 숙소",
    to: "/stay",
  },
  {
    id: 2,
    title: "먹거리 핫플레이스",
    to: "/trending",
  },
  {
    id: 3,
    title: "카페 및 전통 찻집",
    to: "/cafe",
  },
  {
    id: 4,
    title: "음식점",
    to: "/restaurant",
  },
  {
    id: 5,
    title: "권역별 관광지",
    to: "/sightseeing",
  },
];

const Nav = () => {
  return (
    <nav className="p-[20px] shadow-md z-50 fixed top-0 left-0 right-0 bg-background py-[40px]">
      <div className="absolute top-[50%] left-[40px] transform translate-y-[-50%]">
        <Link to={"/"}>
          <h1>
            <img
              className="w-[100px] h-[80px]"
              src="/images/logo.png"
              alt="경주 문화 정보 관광 로고"
            />
          </h1>
        </Link>
      </div>
      <div className="flex justify-center w-[1280px] mx-auto">
        <ul className="flex gap-[50px]">
          {navList.map((menu) => (
            <li
              className="text-xl font-semibold Tablet:text-md Mobile:text-sm"
              key={menu.id}
            >
              <Link to={menu.to}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-[50%] right-[40px] transform translate-y-[-50%]">
        <Weather />
      </div>
    </nav>
  );
};

export default Nav;
