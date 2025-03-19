import { useEffect, useState } from 'react';
import '@/pages/home/page/assets/css/Detail.css';

const Detail = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const rectangleLarge = document.querySelector('.Rectangle-Large');
            const rectangleLargeRect = rectangleLarge!.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 도형이 화면에 70% 이상 들어왔을 때 opacity를 1로 설정
            if (rectangleLargeRect.top < windowHeight * 0.7 && rectangleLargeRect.bottom > 0) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

    return (
        <>
            <div className='detail-container dark:bg-black text-[rgb(43,142,120)] dark:text-white/80'>
                <div className="Rectangle-Large" style={{ opacity }}>
                    <div className="Rectangle-small border-[1px] border-[rgb(43,142,120)] dark:border-white dark:text-white">
                        <p>Fire AO</p>
                    </div>
                    <div className="firstex">
                        <div id='firstline'>
                            <span id="bold">AO&nbsp;</span>는 <span id="bold">Alpha</span>&nbsp;의 <span id="bold">A</span>, <span id="bold">Omega&nbsp;</span>의 <span id="bold">O</span>를 합친 것으로
                        </div>
                        <div id='secondline'>
                            <span id="bold">처음부터 끝까지 함께하겠다</span>는 의미를 담고 있습니다.

                        </div>
                    </div>

                    <div className="secondex">
                        <p className='font-[600] text-2xl'>
                            AO는 85, 86학번 주축으로1986년 부터 2024년까지 이어져 온 전통있는 스터디이며
                            아직까지도 80, 90, 00, 10년대 선배님들과 교류를 왕성히
                            하고 있습니다. AO에 들어오시면 어렵고 복잡한 학교생활
                            깔끔하게 정리해 드리며 불확실성이 큰 취업길까지도 그 동안
                            선배님들이 닦아온 길과 AO가 가지고 있는 정보들을 공유
                            하여 편하게 취업할 수 있도록 최선을 다하겠습니다!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
