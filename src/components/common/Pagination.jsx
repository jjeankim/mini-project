const Button = ({ children,className, ...rest }) => {
  return (
    <button
      className={`py-[8px] px-[16px] border-[1px] border-gray-400 rounded-md text-2lg font-semibold text-gray-400 font-sans hover:bg-green-100 hover:text-background hover:border-green-100 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const Pagination = ({ page, setPage, totalCount }) => {
  const totalPage = Math.ceil(totalCount / 20); //numOfRows를 20으로 고정

  const maxPage = 5;

  if (totalPage <= 1) return null;
  let startPage;

  if (totalPage <= maxPage) startPage = 1;
  else {
    startPage = (Math.floor((page - 1) / maxPage)) * maxPage + 1;
  }

  const pageArr = Array.from(
    {
      length: Math.min(maxPage, totalPage - startPage + 1),
    },
    (_, i) => startPage + i
  );

  const handleClickPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleClickNext = () => {
    if(page < totalPage) setPage(page + 1);
  };
  return (
    <nav className="flex gap-[20px] m-[30px] justify-center">
      <Button type="button" onClick={handleClickPrev}>
        &lt;
      </Button>
      {pageArr.map((pageNum) => (
        <Button className={`${pageNum === page ? "bg-green-100 border-green-100 text-white":""}`} key={pageNum} onClick={() => setPage(pageNum)}>
          {pageNum}
        </Button>
      ))}
      <Button type="button" onClick={handleClickNext}>
        &gt;
      </Button>
    </nav>
  );
};

export default Pagination;
