import Header from "@/common/components/Header";
import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <>
            <Header />
            <div className="firstIntro-container dark:bg-black min-h-screen flex flex-col justify-start items-center pt-[80px]">
                <div className="figure1 -z-[1]"></div>
                <div className="figure2 -z-[1]"></div>
                <div className="figure3 -z-[1]"></div>

                <Outlet />
            </div>
        </>
    )
}

export default index