import "@/pages/home/page/assets/css/MainActivity.css";
// import DetailDes from './DetailDes';
// import Modal from 'react-modal';
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import nextButton from "@/pages/home/page/assets/images/vector.png";

// const modalStyles = {
//     overlay: {
//         zIndex: 1000,

//     },
//     content: {
//         backgroundColor: 'rgb(0,0,0)',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: '80%',
//         maxWidth: '600px',
//         height: '90%',
//         maxHeight: '700px',
//         border: 'none',
//         borderRadius: '8px',
//         padding: '20px',
//         zIndex: 1001,
//     },
// };

import ico1 from "@/pages/home/page/assets/images/group6.png";
import ico2 from "@/pages/home/page/assets/images/group7.png";
import ico3 from "@/pages/home/page/assets/images/group21.png";
import ico4 from "@/pages/home/page/assets/images/group22.png";
import ico5 from "@/pages/home/page/assets/images/group23.png";
import ico6 from "@/pages/home/page/assets/images/group24.png";


interface Activity {
    id: number;
    title: string;
    detail: string;
    image: string;
    Ntitle?: string[];
    Nimage?: string[];
    next: string;
}

function MainActivity() {
    // const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    // useEffect(() => {
    //     // 모달이 열릴 때 body에 스크롤 숨김 스타일 적용
    //     if (modalIsOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         // 모달이 닫힐 때 body 스크롤 복원
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [modalIsOpen]);

    const activities: Activity[] = [
        {
            id: 1,
            title: '스터디 활동',
            detail: '알고리즘, 책 스터디 등',
            image: ico1,
            // Ntitle: ['깃허브로 관리되는 체계적인 스터디', '깃허브로 관리되는 체계적인 스터디', '서버파트 스터디', '서버파트 스터디', '알고리즘 스터디'],
            // Nimage: ['@/common/assets/images/github1.png', '@/common/assets/images/github2.png', '@/common/assets/images/serverstudy.jpg', '@/common/assets/images/serverstudy2.png', '@/common/assets/images/study3.png'],
            next: "/about"
        },
        {
            id: 2,
            title: '세미나',
            detail: '개발 관련 주제 선정 후 발표',
            image: ico2,
            // Ntitle: ['깃허브 세미나'],
            // Nimage: ['@/common/assets/images/seminar.png'],
            next: "/about"
        },
        {
            id: 3,
            title: '프로젝트',
            detail: '직접 앱이나 웹을 멘토링 받으면서 만들어보기',
            image: ico3,
            // Ntitle: ['웹 프로젝트', '경쟁식 프로젝트'],
            // Nimage: ['@/common/assets/images/webproject.png', '@/common/assets/images/webproject2.png'],
            next: "/about"
        },
        {
            id: 4,
            title: '파티',
            detail: '학기별 개강파티 + 종강파티',
            image: ico4,
            // Ntitle: ['개강파티', '종강파티'],
            // Nimage: ['@/common/assets/images/drink1.jpg', '@/common/assets/images/drink2.png'],
            next: "/archive"
        },
        {
            id: 5,
            title: 'MT',
            detail: '4월 중순 쯤',
            image: ico5,
            // Ntitle: ['단체 사진', '게임', '바베큐'],
            // Nimage: ['@/common/assets/images/mt2.png', '@/common/assets/images/mt1.jpg', '@/common/assets/images/mt3.png'],
            next: "/archive"
        },
        {
            id: 6,
            title: '총회',
            detail: '11월 말 쯤',
            image: ico6,
            // Ntitle: ['연말에 진행되는 총회', '선배님들과 함께하는 총회', '선배님들과 함께하는 총회'],
            // Nimage: ['@/common/assets/images/meeting1.jpg', '@/common/assets/images/meeting2.jpg', '@/common/assets/images/meeting3.jpg'],
            next: "/archive"
        },
        {
            id: 7,
            title: '자세히 보기',
            detail: '',
            image: '',
            next: "/about"
        },
    ];

    const handleActivityClick = (activity: Activity) => {
        // setSelectedActivity(activity);
        // setModalIsOpen(true); // 모달을 엽니다.
        navigate(activity.next);
    };

    // const handleCloseModal = () => {
    //     setSelectedActivity(null);
    //     setModalIsOpen(false); // 모달을 닫습니다.
    // };

    return (
        <>
            <div className='main-container dark:bg-black bg-white'>
                <div className="animation">
                    <div className="marquee-container">
                        <p className="marquee-text">FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className="mainEng text-black dark:text-white"><p>Fire AO</p></div>
                <div className="mainKor text-black dark:text-white"><p>주요 활동 내용</p></div>

                {activities.map((activity: Activity) => (
                    activity.image
                        ? (
                            <button key={activity.id} className="activity bg-[#fafafa] dark:bg-[#191919]" onClick={() => handleActivityClick(activity)}>
                                <img src={activity.image} alt={activity.title} id="activitypic" />
                                <div className="actext text-black dark:text-white">
                                    <p id="actitle" className="font-['PRETENDARD-LIGHT']">{activity.title}</p>
                                    <p id="acdetail" className="font-['PRETENDARD-LIGHT']">{activity.detail}</p>
                                </div>
                                <img src={nextButton} alt="vector" id="vector"></img>
                            </button>
                        )
                        : (
                            <button key={activity.id} className="activity bg-[#fafafa] dark:bg-[#191919] mt-10 animate-rainbow-bounce-stronger flex flex-row justify-center" onClick={() => handleActivityClick(activity)}>
                                <div className="actext border-b-2">
                                    <p id="actitle" className="text-white animate-text-bounce-stronger font-['PRETENDARD-ExtraBold']">{activity.title}</p>
                                </div>
                                {/* <img src={nextButton} alt="vector" id="vector"></img> */}
                            </button>
                        )
                ))}

                <div className='figure4'></div>
                <div className='figure5'></div>
                <div className='figure6'></div>
                <div className='figure7'></div>
                <div className='figure8'></div>
            </div >
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={modalStyles}
                contentLabel="Detail Modal"
            >
                <button className="close-button" onClick={handleCloseModal}>X</button>
                {selectedActivity && <DetailDes {...selectedActivity} />}
            </Modal> */}
        </>
    );
}

export default MainActivity;