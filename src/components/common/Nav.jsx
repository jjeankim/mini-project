const navList = [
  {
    id: 1,
    title: "테마별 숙소",
  },
  {
    id: 2,
    title: "카페 및 전통 찻집",
  },
  {
    id: 3,
    title: "음식점",
  },
  {
    id: 4,
    title: "먹거리 핫플레이스",
  },
  {
    id: 5,
    title: "권역별 관광지",
  },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-between gap-[100px] p-[10px] shadow-md z-50">
      <h1>
        <img
          className="w-[100px] h-[100px]"
          src="/images/logo.png"
          alt="경주 문화 정보 관광 로고"
        />
      </h1>
      <ul className="flex gap-[80px]">
        {navList.map((menu) => (
          <li className="text-xl font-semibold " key={menu.id}>
            {menu.title}
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Nav;
