const EndOfData = () => {
  return (
    <div className="flex justify-center items-center py-4 text-gray-400">
      <div className="w-6 h-6 mr-2 rounded-full bg-gray-300 text-white text-center" >X</div>
      <span>더이상 불러올 데이터가 없어요</span>
    </div>
  );
};

export default EndOfData;
