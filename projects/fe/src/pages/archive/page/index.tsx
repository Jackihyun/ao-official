import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react';


import Mt1Image from "@/pages/archive/page/assets/images/MT1.png";
import Mt2Image from "@/pages/archive/page/assets/images/MT2.png";
import Study1Image from "@/pages/archive/page/assets/images/서버파트1.png";
import Study2Image from "@/pages/archive/page/assets/images/서버파트2.png";
import Dinner1Image from "@/pages/archive/page/assets/images/전체회식1.png";
import Dinner2Image from "@/pages/archive/page/assets/images/전체회식2.png";
import Meeting1Image from "@/pages/archive/page/assets/images/총회1.png";
import Meeting2Image from "@/pages/archive/page/assets/images/총회2.png";
import Meeting3Image from "@/pages/archive/page/assets/images/총회3.png";
import Slide from './components/Caption';
import Tag from './components/Tag';

import ao from "@/common/assets/images/AO-symbol.png";
import { Helmet } from 'react-helmet';

const index = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        startIndex: 0
    }, [
        Autoplay({
            delay: 2000
        }),
        WheelGesturesPlugin(),
        // AutoHeight()
    ])

    useEffect(() => {
        if (emblaApi) console.log(emblaApi.slideNodes())
    }, [emblaApi])

    return (
        <>
            <main className="flex-grow pt-[33.67px]">
                <div
                    className="embla overflow-hidden mask-slider"
                    ref={emblaRef}
                >
                    <div className="embla__container flex whitespace-nowrap gap-[10px]">
                        <Slide
                            title="전체 MT"
                            explanation="신나게 놀고 먹는 전체 MT"
                            image={Mt1Image}
                        />
                        <Slide
                            title="전체 MT"
                            explanation="신나게 놀고 먹는 전체 MT"
                            image={Mt2Image}
                        />
                        <Slide
                            title="전체 회식"
                            explanation="즐거운 FIRE AO 전체 회식"
                            image={Dinner1Image}
                        />
                        <Slide
                            title="전체 회식"
                            explanation="즐거운 FIRE AO 전체 회식"
                            image={Dinner2Image}
                        />
                        <Slide
                            title="서버파트 스터디"
                            explanation="함께, 또 따로 열심히!"
                            image={Study1Image}
                        />
                        <Slide
                            title="서버파트 스터디"
                            explanation="함께, 또 따로 열심히!"
                            image={Study2Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting1Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting2Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting3Image}
                        />
                    </div>
                </div>

                <div className="flex justify-end items-center gap-[10px] flex-wrap mb-5">
                    <Tag tag="#AO 전체 회식" />
                    <Tag tag="#전체 MT" />
                    <Tag tag="#서버파트 스터디" />
                    <Tag tag="#알고리즘 스터디" />
                    <Tag tag="#AO 총회" />
                    <Tag tag="#Alpha부터_Omega까지!" />
                </div>
            </main>

            <Helmet>
                <title>Archive | Fire AO</title>
                <link rel="canonical" href={`/archive`} />
                <meta name="description" content="Fire AO archive" />
                <meta name="keywords" content={`fire, AO, Myongji, Univ., MJ, computer, science, major, archive`} />
                <meta name="author" content="FireAO" />/

                <meta property="og:title" content="archive | Fire AO" />
                <meta property="og:description" content="Fire AO archive" />
                <meta property="og:image" content={ao} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Fire AO" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:url" content={`/archive`} />

                <meta name="twitter:title" content={`archive | Fire AO`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={'Fire AO archive'} />
                <meta name="twitter:image" content={ao} />
            </Helmet>
        </>
    )
}

export default index