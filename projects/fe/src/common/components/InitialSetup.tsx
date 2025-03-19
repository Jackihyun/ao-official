import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import { RootState } from "@/common/redux/store";
import { Helmet } from 'react-helmet';

const InitialSetup = () => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    useEffect(() => {
        if (isDarkMode === true
        ) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [isDarkMode]);

    return (
        <>
            <div className='fixed w-screen h-screen bg-white dark:bg-black -z-10' />

            {/* <Header /> */}
            <Outlet />

            <div className='fixed w-screen h-screen bg-white dark:bg-black -z-10' />


            {
                isDarkMode
                    ? <Helmet>
                        <meta name='theme-color' content='#000000' />
                        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
                        <meta name='msapplication-navbutton-color' content='#000000' />
                    </Helmet>
                    : <Helmet>
                        <meta name='theme-color' content='#ffffff' />
                        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                        <meta name='msapplication-navbutton-color' content='#ffffff' />
                    </Helmet>
            }
        </>
    )
}

export default InitialSetup