import { ScrollRestoration, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import { useEffect, useState } from 'react';
import Header from '@/common/components/Header';

import "@/common/assets/css/history.css"
import ApplyButton from '@/common/components/ApplyButton';
import FooterByTeamTwo from '@/common/components/FooterByTeamTwo';

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

const History = () => {
    const [title, setTitle] = useState<string>("");
    const [explanation, setExplanation] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            setTitle("About");
            setExplanation("대학 생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.");
        }
        else if (location.pathname === "/archive") {
            setTitle("Archive");
            setExplanation("Fire AO 의 활동 모음집입니다.");
        }
        else if (location.pathname === "/intro") {
            setTitle("Introduction");
            setExplanation("Fire AO 와 함께하는 임원진을 소개합니다.");
        }
    }, [location.pathname]);

    const handleNavClass = (props: NavLinkRenderProps) => {
        const { isActive } = props;

        return isActive
            ? "border-b-[2px] border-b-black/50 w-full text-black/80 dark:text-white/90 font-bold pb-1 dark:border-b-white/70"
            : "border-b-[2px] border-b-black/10 dark:border-b-white/20 text-black/50 dark:text-white/60 w-full pb-3 font-bold"
    }

    return (
        <>
            <ScrollRestoration />
            <Header />

            <div className="bg-white dark:bg-black overflow-hidden min-h-[100vh] flex flex-col items-center z-[50] history-bg pt-[30px]">
                <div className="figure1 -z-[1]"></div>
                <div className="figure2 -z-[1]"></div>
                <div className=''>
                    <div className="flex-grow flex flex-col justify-center max-w-[1000px] w-[100vw] text-left pl-[19px] 
                        bg-black/5 bg-opacity-100 dark:bg-[#303030] dark:bg-opacity-75 rounded-xl px-[20px] py-[15px]"
                    >
                        <h1 className="text-2xl font-['Pretendard-Bold'] text-[#0d0d0d]/90 dark:text-white/85">
                            {title}
                        </h1>
                        <p className="text-sm font-['PRETENDARD-SEMIBOLD'] text-black/75 dark:text-white/80">
                            {explanation}
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-[1024px] w-full h-full dark:bg-[#303030] dark:bg-opacity-45 bg-opacity-75 bg-white rounded-[30px] mt-5 shadow-xl mb-10"
                >
                    {/* Nav buttons */}

                    <div className="z-50 flex w-full justify-around px-8 text-center gap-4 pt-5 font-['Montserrat']">
                        <NavLink className={handleNavClass} to="/about">About</NavLink>
                        <NavLink className={handleNavClass} to="/archive">Archive</NavLink>
                        <NavLink className={handleNavClass} to="/intro">Intro</NavLink>
                    </div>

                    <div className='px-5'>
                        <Outlet />

                        <ApplyButton />
                    </div>
                </div>

                <FooterByTeamTwo />
            </div>
        </>
    )
}

export default History