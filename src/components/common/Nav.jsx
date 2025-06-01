import { Link } from "react-router-dom";

const navList = [
  {
    id: 1,
    title: "테마별 숙소",
    to: "/stay",
  },
  {
    id: 2,
    title: "카페 및 전통 찻집",
    to: "/cafe",
  },
  {
    id: 3,
    title: "음식점",
    to: "/restaurant",
  },
  {
    id: 4,
    title: "먹거리 핫플레이스",
    to: "/trending",
  },
  {
    id: 5,
    title: "권역별 관광지",
    to: "/sightseeing",
  },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-between gap-[100px] p-[20px] shadow-md z-50 fixed left-0 right-0 top-0 bg-background">
      <Link to={"/"}>
        <h1>
          <img
            className="w-[100px] h-[80px]"
            src="/images/logo3.png"
            alt="경주 문화 정보 관광 로고"
          />
        </h1>
      </Link>
      <ul className="flex gap-[80px]">
        {navList.map((menu) => (
          <li className="text-xl font-semibold " key={menu.id}>
            <Link to={menu.to}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Nav;
