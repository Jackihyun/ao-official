import AoJc from "@/common/assets/images/종찬이형.jpg";
import Aosj from "@/common/assets/images/세진이.png";
import Aojh from "@/common/assets/images/나2.png";
import Aoce from "@/common/assets/images/신초은.jpg";
import Aoyn from "@/common/assets/images/최윤아.jpg";

import JcIcon from "@/pages/intro/page/assets/images/ao김종찬아바타.jpg";
import SjIcon from "@/pages/intro/page/assets/images/ao박세진아바타.jpg";
import JhIcon from "@/pages/intro/page/assets/images/ao천제희아바타.jpg";
import CeIcon from "@/pages/intro/page/assets/images/ao신초은아바타.jpg";
import YnIcon from "@/pages/intro/page/assets/images/ao최윤아아바타.jpg";

import Aokh from "@/pages/intro/page/assets/images/박기현사진.jpg";
import Aoys from "@/pages/intro/page/assets/images/유용석사진.jpg";
import Aojm from "@/pages/intro/page/assets/images/송정민사진.jpg";
import Aoij from "@/pages/intro/page/assets/images/정익재사진.jpg";
import AoChangminLee from "@/pages/intro/page/assets/images/Changmin-Lee.jpg";
import AoChoeunKim from "@/pages/intro/page/assets/images/Choeun-Kim.jpg";
import AoJunghyukBang from "@/pages/intro/page/assets/images/Junhyuk-Bang.jpg";
import AoSeohyunBang from "@/pages/intro/page/assets/images/Seohyun-An.jpg";
import AoYuminNo from "@/pages/intro/page/assets/images/Yunin-No.jpg";

import ExecutiveAvatar from "@/pages/intro/page/components/ExecutiveAvatar";
import DeveloperAvatar from "@/pages/intro/page/components/DeveloperAvatar";

import { useState } from "react";

import ao from "@/common/assets/images/AO-symbol.png";
import { Helmet } from "react-helmet";
import AvatarLayer from "./assets/images/AvatarLayer";
import InstaIcon from "./assets/images/InstaIcon";
import DeveloperGroup from "./components/DeveloperGroup";

interface Profile {
  id: number;
  name: string;
  position: string;
  phone: string;
  insta: string;
  image: string;
  avatar: string;
  words?: React.ReactNode;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "배종찬",
    position: "회장님",
    phone: "010-4939-1971",
    insta: "bnadgnohz",
    image: AoJc,
    avatar: JcIcon,
    words: <>
      <span>“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span>
      <span>정승처럼 공부하고 개처럼 마시는 스터디 AO! </span>
      <span>군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span>
      <span>MT면 MT, 스터디면 스터디, 회식이면 회식!</span>
      <span>뭐 하나 빠지지 않는 저희 AO 스터디에서 바라왔던 대학생활 보내시면 좋겠습니다 🔥🔥”</span>
    </>
  },
  {
    id: 2,
    name: "박세진",
    position: "코딩얼굴마담",
    phone: "",
    insta: "re_alworld",
    image: Aosj,
    avatar: SjIcon,
    words: <>
      <span>“안녕하세요~~ 19학번 석유 박세진입니다!</span>
      <span>A(lcohol)O(nly)는 여러분 인생에서 처음일 수 있는</span>
      <span> 신입생 생활을 책임져 드립니다!!</span>
      <span>또한 컴공 관련 정보도 많이 얻을 수 있어요. </span>
      <span>안 올 이유가 없다고 볼 수 있죠. AO에서 같이 성장해 보아요!"</span>
    </>
  },
  {
    id: 3,
    name: "천제희",
    position: "AO GPT",
    phone: "",
    insta: "jeheecheon",
    image: Aojh,
    avatar: JhIcon,
    words: <>
      <span>“Fire🔥 AO 18학번 천제희입니다. </span>
      <span>AO만큼 활발한 스터디! 여기 말고 절대 없어요</span>
      <span>같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요" </span>
    </>
  },
  {
    id: 4,
    name: "신초은",
    position: "코드킹메이커",
    phone: "",
    insta: "cho01_63",
    image: Aoce,
    avatar: CeIcon,
    words: <>
      <span>“안녕하세요 FIRE AO 20학번 신초은입니다☺ </span>
      <span>족보, 인맥, 정보, 각종 스터디 등 생각보다 얻어갈 수 있는게 정말
        많아요!</span>
      <span>밥 잘 사주는 스터디 AO에서 슬기로운 대학생활 해보아요" </span>
    </>
  },
  {
    id: 5,
    name: "최윤아",
    position: "고민상담사",
    phone: "",
    insta: "yuna_co_2",
    image: Aoyn,
    avatar: YnIcon,
    words: <>
      <span>“안녕하세요 스터디 AO 21학번 최윤아입니다!! </span>
      <span>학과 생활 하면서 필요한 정보들과 족보, </span>
      <span>인맥 또한 행복하고 즐겁게 얻어갈 수 있습니다🫶</span>
      <span>좋은 사람들을 많이 사귀고, 성적을 잘 받고 싶은 학우들이라면 함께
        해요!🍀"
      </span>
    </>
  },
]

const index = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile>(profiles[0])
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const showChange = () => {
    console.log("Clicked");
  }

  return (
    <>
      <div className="">
        <div className="w-full h-[1] pb-[190px]" />

        <div className="flex justify-center">
          <div className="w-[131px] h-[129px] absolute top-[250px] mr-[180px]">
            <AvatarLayer />
            <button onClick={showChange}>
              <img
                src={isFlipped ? selectedProfile.avatar : selectedProfile.image}
                alt="메인 사진"
                onClick={() => setIsFlipped(!isFlipped)}
                className={`shadow-xl w-[99px] h-[99px] animate-bounce relative left-[2px] -top-[60px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover
                ${isFlipped ? 'animate-flipped' : ''}`}
              />
            </button>
          </div>

          <div
            className="flex flex-col w-auto justify-center items-start ml-[60px] -mt-[100px]"
          >
            <p className="text-[13px] font-['PRETENDARD-BOLD'] text-black dark:text-white">
              {selectedProfile.name}
            </p>
            <p className="text-[10px] font-['PRETENDARD-MEDIUM'] text-[#747474] dark:text-stone-300">
              {selectedProfile.position}
            </p>
            {selectedProfile.phone && (
              <p className="mt-[6px] text-[10px] font-['PRETENDARD-MEDIUM'] text-[#747474] dark:text-white/80">
                {selectedProfile.phone}
              </p>
            )}

            <a
              href={`https://www.instagram.com/${selectedProfile.insta}`}
              className=" flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
            >
              <InstaIcon />
              <span className="ml-[2.5px]">{selectedProfile.insta}</span>
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[25px] py-[28px] rounded-[20px] bg-white mt-[30px] mx-auto"
          style={{ boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)" }}
        >
          <p className="font-['PRETENDARD-REGULAR'] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] md:text-[12px] text-center text-black">
            {selectedProfile.words}
          </p>
        </div>
      </div>

      <div className="flex mt-[35px] flex-col w-[87%] mx-auto ">
        <p className="text-base font-['PRETENDARD-SEMIBOLD'] text-left text-black dark:text-white">
          AO Team Members
        </p>

        <div className="flex flex-row items-center justify-center flex-wrap gap-4 mt-4">
          <ExecutiveAvatar active={selectedProfile.id === 5} profile={profiles[0]} onClick={() => {
            setSelectedProfile(profiles[0]);
            setIsFlipped(false);
          }} />
          <ExecutiveAvatar active={selectedProfile.id === 1} profile={profiles[1]} onClick={() => {
            setSelectedProfile(profiles[1]);
            setIsFlipped(false);
          }} />
          <ExecutiveAvatar active={selectedProfile.id === 2} profile={profiles[2]} onClick={() => {
            setSelectedProfile(profiles[2]);
            setIsFlipped(false);
          }} />
          <ExecutiveAvatar active={selectedProfile.id === 3} profile={profiles[3]} onClick={() => {
            setSelectedProfile(profiles[3]);
            setIsFlipped(false);
          }} />
          <ExecutiveAvatar active={selectedProfile.id === 4} profile={profiles[4]} onClick={() => {
            setSelectedProfile(profiles[4]);
            setIsFlipped(false);
          }} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[87%] mx-auto mt-[40px] mb-[40px]">
        <div className="w-full mx-auto">
          <p className="w-full text-base font-['PRETENDARD-SEMIBOLD'] text-left text-black dark:text-white">
            Developers of AO WEB
          </p>
          <p
            className="w-full text-[14px] font-['PRETENDARD-BOLD'] text-left  text-[#848484] dark:text-[#CCC]"
          >
            Team. 프링글스 양파맛 좋아합니다
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap mt-[15px] gap-[12px]">
          <DeveloperAvatar src={Aokh} />
          <DeveloperAvatar src={AoChoeunKim} />
          <DeveloperAvatar src={Aoys} />
          <DeveloperAvatar src={AoChangminLee} />
          <DeveloperAvatar src={Aojm} />
          <DeveloperAvatar src={AoYuminNo} />
          <DeveloperAvatar src={Aoij} />
          <DeveloperAvatar src={AoJunghyukBang} />
          <DeveloperAvatar src={AoSeohyunBang} />
        </div>

        <div
          className="px-[15%] flex flex-col justify-center items-center mt-[37px] gap-[10px]"
        >
          <DeveloperGroup
            groupName="Infra."
            names={["박세진 Sejin Park", "천제희 Jehee Cheon", "배종찬 Jongchan Bae"]}
          />

          <DeveloperGroup
            groupName="Frontend."
            names={["박기현 Kihyun Park", "김초은 Choeun Kim", "유용석 Yongseok Yoo", "이창민 Changmin Lee"]}
          />

          <DeveloperGroup
            groupName="Backend."
            names={["송정민 Jeongmin Song", "노유빈 Yunin No", "정익재 Ikjae Jeong", "방준혁 Junhyuk Bang", "안서현 Seohyun An"]}
          />
        </div>
      </div>

      <Helmet>
        <title>Intro | Fire AO</title>
        <link rel="canonical" href={`/intro`} />
        <meta name="description" content="Fire AO intro" />
        <meta name="keywords" content={`fire, AO, Myongji, Univ., MJ, computer, science, major, intro`} />
        <meta name="author" content="FireAO" />/

        <meta property="og:title" content="intro | Fire AO" />
        <meta property="og:description" content="Fire AO intro" />
        <meta property="og:image" content={ao} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fire AO" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:url" content={`/intro`} />

        <meta name="twitter:title" content={`intro | Fire AO`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={'Fire AO intro'} />
        <meta name="twitter:image" content={ao} />
      </Helmet>
    </>
  )
}

export default index