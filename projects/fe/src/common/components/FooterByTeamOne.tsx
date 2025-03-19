import "@/pages/home/page/assets/css/Footer.css";
import call from "@/pages/home/page/assets/images/call.png";
import { Link } from "react-router-dom";

function FooterByTeamOne() {
    return (
        <>
            <footer>
                <div className='footer bg-[#f9f9f9] dark:bg-[#171717]'>
                    <p className="footername text-[#121212]/90 dark:text-white">
                        Fire AO
                    </p>
                    <div className="call">
                        <img className="callimg" src={call} />
                        &nbsp;
                        <p id="number" className="text-black dark:text-white">010-4939-1971</p>
                    </div>
                    <Link
                        className="copyright text-black dark:text-white cursor-text "
                        to="/admin/sign-in">
                        ⓒ Fire AO. 2024 All rights reserved
                    </Link>
                </div>

            </footer>
        </>
    )
}

export default FooterByTeamOne;