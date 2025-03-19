import { Link } from 'react-router-dom'

const ApplyButton = () => {
    return (
        <Link
            to="/apply"
            className="my-[51px] block w-[337px] mx-auto"
        >
            <div
                className="active:bg-[#4dd2b9] active:scale-95 transition duration-100 ease-in-out text-center 
                flex justify-center relative overflow-hidden px-5 py-3.5 rounded-[50px] 
                text-base text-white/95 dark:text-white bg-[#8473f2]"
            >
                <span className="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-base text-center ">
                    Fire AO&nbsp;
                </span>
                <span className="text-base font-['PRETENDARD-BOLD'] text-center">
                    지원하러 가기
                </span>
            </div>
        </Link>)
}

export default ApplyButton