import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from "@/common/redux/store";
import { setIsDarkMode } from '../redux/themeSlice';
import { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import Moon from '../assets/images/Moon';
import Sun from '../assets/images/Sun';

const Header = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const prevScrollY = useRef<number>(0);
    const [headerTop, setHeaderTop] = useState<number>(0);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const handleDarkModeButtonClicked = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    }

    const handleScroll = () => {
        let tempHeaderTop: number = 0;
        if (window.scrollY > 50) {
            if (window.scrollY > prevScrollY.current) { // down
                const topDiff = window.scrollY - prevScrollY.current;
                tempHeaderTop = headerTop - topDiff;
                if (tempHeaderTop < -120)
                    tempHeaderTop = -120;
            }
            else {
                const topDiff = prevScrollY.current - window.scrollY;
                tempHeaderTop = headerTop + topDiff;
                if (tempHeaderTop > 0)
                    tempHeaderTop = 0;
            }
        }

        setHeaderTop(tempHeaderTop);
        prevScrollY.current = window.scrollY;
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <div className='fixed z-[100] w-[100vw]'
                style={{
                    top: `${headerTop}px`
                }}
            >
                <div
                    className="flex justify-between items-center w-full relative px-5 h-[50px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 dark:border-[#0d0d0d]"
                >
                    <button onClick={handleDarkModeButtonClicked}>
                        <Moon />
                        <Sun />
                    </button>

                    <Link
                        to="/"
                        className="flex-grow-0 flex-shrink-0 text-[24px] flex flex-row font-['PaytoneOne'] font-bold text-[#121212]/90 dark:text-white"
                    >
                        Fire AO
                    </Link>

                    {/* dummy tag */}
                    {/* <div className='w-[27px] h-full' /> */}

                    <button onClick={() => { setMenuVisible(!menuVisible) }} className="z-[100]">
                        <div
                            className="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center"
                        >
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${menuVisible
                                    ? "-rotate-45 translate-y-[7px] translate-x-[0.1px] bg-white"
                                    : ""
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transition-opacity duration-300 ${menuVisible ? "opacity-0" : ""
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${menuVisible
                                    ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] bg-white"
                                    : ""
                                    }`}
                            ></div>
                        </div>
                    </button>
                </div>
                <Menu menuVisible={menuVisible} toggleMenuVisible={() => setMenuVisible(!menuVisible)} />
            </div>

            <div className='h-[50px] w-full' />
        </>
    )
}

export default Header