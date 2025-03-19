import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface MenuProps {
    menuVisible: boolean;
    toggleMenuVisible: () => void;
}

const links = [
    {
        title: "home",
        path: "/",
    },
    {
        title: "archive",
        path: "/archive",
    },
    {
        title: "introduction",
        path: "/intro",
    },
    {
        title: "about",
        path: "/about",
    },
    {
        title: "지원하기",
        path: "/apply",
    }
];

const Menu: React.FC<MenuProps> = React.memo(({ menuVisible, toggleMenuVisible }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (menuVisible) {
            if (!hasInteracted)
                setHasInteracted(true);

            document.body.style.overflow = 'hidden';

            menuRef.current?.classList.add("animate-fade-in");
            menuRef.current?.classList.remove("pointer-events-none");
            menuRef.current?.classList.remove("animate-fade-out");
        } else {
            document.body.style.overflow = 'auto';

            menuRef.current?.classList.add("animate-fade-out");
            menuRef.current?.classList.add("pointer-events-none");
            menuRef.current?.classList.remove("animate-fade-in");
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [menuVisible]);

    return (
        hasInteracted &&
        <div
            ref={menuRef}
            className="overflow-y-auto animate-fade-in fixed top-0 left-0 
            bg-[#8473f2] dark:bg-black w-screen h-screen text-white dark:text-white z-50 flex flex-col"
            onClick={toggleMenuVisible}
        >
            <header className="px-5 py-[11px] mb-[27px] inline-block text-center">
                <Link to="/" className="text-3xl mx-auto font-['PaytoneOne']">
                    Fire AO
                </Link>
            </header>

            <div className="flex flex-col mx-[18px]">
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="uppercase border-b border-white dark:border-white py-[27px] font-['PRETENDARD-REGULAR']
                            text-xl pl-[14px] md:pl-[33px] md:text-2xl font-bold"
                        >
                            {link.title}
                        </Link>
                    ))
                }
            </div>

            <p className="text-[13px] font-['PRETENDARD-REGULAR'] mx-auto my-auto mb-[27px]">
                ⓒ Fire AO. 2024 All rights reserved
            </p>
        </div>
    )
});

export default Menu