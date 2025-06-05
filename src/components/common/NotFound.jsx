import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const nav = useNavigate()

  const handleClickBtn = () => {
    nav("/")
  }
  return (
    <div className="flex justify-center items-center min-h-screen pt-[120px]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold ">404 | 페이지를 찾을 수 없습니다.</h2>
        <button type="button" onClick={handleClickBtn} className="mt-[24px] py-[10px] px-[16px] text-gray-400 border border-gray-400 rounded-md hover:text-green-200 hover:border-green-200">홈페이지로 돌아가기</button>
      </div>
    </div>
  );
};

export default NotFound;
