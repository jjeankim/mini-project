const AddMoreBtn = ({ page, setPage, totalCount,isLoading,isFiltered }) => {
  const lastPage = Math.ceil(totalCount / 20);

  const isDisabled = isLoading || page >= lastPage || isFiltered
  return (
    <div className="flex justify-center mt-[20px]">
      <button
        disabled={isDisabled}
        onClick={() => setPage(page + 1)}
        className="mt-4 px-4 py-2 border border-gray-400 rounded text-gray-600 hover:border-green-200 hover:text-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400"
      >
        더 불러오기
      </button>
    </div>
  );
};

export default AddMoreBtn;
