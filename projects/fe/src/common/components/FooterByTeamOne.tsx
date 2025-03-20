import { useState } from "react";
import "@/pages/home/page/assets/css/Footer.css";
import call from "@/pages/home/page/assets/images/call.png";
import { Link } from "react-router-dom";

function FooterByTeamOne() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <footer>
        <div className="footer bg-[#f9f9f9] dark:bg-[#171717] relative">
          <p className="footername text-[#121212]/90 dark:text-white">
            Fire AO
          </p>

          <button className="call flex items-center gap-2" onClick={openModal}>
            <img className="callimg" src={call} alt="전화 아이콘" />
            <p id="number" className="text-black dark:text-white">
              010-6692-9484
            </p>
          </button>

          <Link
            className="copyright text-black dark:text-white cursor-text"
            to="/admin/sign-in"
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
      </footer>

      <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.15s ease-out;
        }
      `}</style>
    </>
  );
}

export default FooterByTeamOne;
