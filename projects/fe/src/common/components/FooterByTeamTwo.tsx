import { Link } from 'react-router-dom'
import Phone from '../assets/images/Phone'

const FooterByTeamTwo = () => {
    return (
        <div className="max-w-[1024px] w-full h-[138px] bg-white dark:bg-black text-left mt-auto">
            <Link
                className="text-xl font-['Montserrat'] font-black text-black dark:text-white mt-[25px] ml-[19px] mb-[6px]"
                to="/"
            >
                Fire AO
            </Link>

            <div className="flex items-center ml-[19px] mt-5 text-neutral-900 dark:text-[#e5e5e5] font-['PRETENDARD-REGULAR'] text-[13px]">
                <Phone />
                010-4939-1971
            </div>

            <Link
                to="/admin/sign-in"
                className="cursor-text text-[13px] text-neutral-900 dark:text-[#E5E5E5] font-['PRETENDARD-REGULAR'] mt-[6px] ml-[18px]">
                ⓒ Fire AO. 2024 All rights reserved
            </Link>
        </div>)
}

export default FooterByTeamTwo