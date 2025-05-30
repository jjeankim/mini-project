const Button = ({ children, ...rest }) => {
  return (
    <button
      className="py-[8px] px-[16px] border-[1px] border-gray-400 rounded-md text-2lg font-semibold text-gray-400 font-sans hover:bg-green-100 hover:text-background hover:border-green-100"
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
  let calNum;

  if (totalPage <= maxPage) startPage = 1;
  else {
    calNum = Math.ceil(page / maxPage);
    startPage = (calNum - 1) * maxPage + 1;
  }

  const pageArr = Array.from(
    {
      length: Math.min(maxPage, totalPage - startPage + 1),
    },
    (_, i) => startPage + i
  );

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };
  return (
    <nav className="flex gap-[20px] m-[30px] justify-center">
      <Button  type="button" onClick={handleClickPrev}>
        &lt;
      </Button>
      {pageArr.map((page) => (
        <Button>{page}</Button>
      ))}
      <Button  type="button" onClick={handleClickNext}>
        &gt;
      </Button>
    </nav>
  );
};

export default Pagination;
