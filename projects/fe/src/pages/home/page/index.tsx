import FirstIntro from "@/pages/home/page/components/FirstIntro";
import Detail from "@/pages/home/page/components/Detail";
import FooterByTeamOne from "@/common/components/FooterByTeamOne";
import MainActivity from "@/pages/home/page/components/MainActivity";
import Executives from "@/pages/home/page/components/Executives";
import Header from '@/common/components/Header';
import { Helmet } from "react-helmet";

import ao from "@/common/assets/images/AO-symbol.png";

const Root = () => {
    return (
        <>
            <div className="App">
                <Header />
                <FirstIntro />
                <Detail />
                <MainActivity />
                <Executives />
                <FooterByTeamOne />
            </div>

            <Helmet>
                <link rel="canonical" href={`/`} />
                <meta name="description" content="Fire AO!" />
                <meta name="keywords" content={`fire, AO, Myongji, Univ., MJ, computer, science, major`} />
                <meta name="author" content="FireAO" />/

                <meta property="og:title" content="Fire AO" />
                <meta property="og:description" content="Fire AO!" />
                <meta property="og:image" content={ao} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Fire AO" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:url" content={`/`} />

                <meta name="twitter:title" content={`Fire AO`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={'Fire AO'} />
                <meta name="twitter:image" content={ao} />
            </Helmet>
        </>
    )
}

export default Root