import { Link } from "react-router-dom";
import { useState } from "react";
import Phone from "../assets/images/Phone";

const FooterByTeamTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-[1024px] w-full h-[138px] bg-white dark:bg-black text-left mt-auto relative">
      <Link
        className="text-xl font-['Montserrat'] font-black text-black dark:text-white mt-[25px] ml-[19px] mb-[6px]"
        to="/"
      >
        Fire AO
      </Link>

      <button
        onClick={openModal}
        className="flex items-center ml-[19px] mt-5 text-neutral-900 dark:text-[#e5e5e5] font-['PRETENDARD-REGULAR'] text-[13px]"
      >
        <Phone />
        <span className="ml-1">010-6692-9484</span>
      </button>

      <Link
        to="/admin/sign-in"
        className="cursor-text text-[13px] text-neutral-900 dark:text-[#E5E5E5] font-['PRETENDARD-REGULAR'] mt-[6px] ml-[18px]"
      >
        ⓒ Fire AO. 2024 All rights reserved
      </Link>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-black rounded-xl shadow-xl transform transition-transform animate-scaleIn p-5 w-[300px]">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                ⭐ 회장 연락처 안내
              </p>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:text-white dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="my-10 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
              010-6692-9484
            </div>

            <div className="flex gap-3 justify-center">
              <a
                href="tel:01066929484"
                className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                전화 걸기
              </a>
              <a
                href="sms:01066929484"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                문자 보내기
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterByTeamTwo;
