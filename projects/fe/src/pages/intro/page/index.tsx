import AoJc from "@/common/assets/images/종찬이형.jpg";
import Aomh from "@/common/assets/images/myunghyun.jpg";
import AoJe from "@/common/assets/images/parkjungen.jpeg";
import AoJk from "@/common/assets/images/jungjinuk.jpeg";

import JcIcon from "@/pages/intro/page/assets/images/ao김종찬아바타.jpg";
import SjIcon from "@/pages/intro/page/assets/images/ao박세진아바타.jpg";
import JhIcon from "@/pages/intro/page/assets/images/ao천제희아바타.jpg";
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
    name: "유용석",
    position: "AO 회장",
    phone: "010-6692-9484",
    insta: "yd._.5eok",
    image: Aoys,
    avatar: JcIcon,
    words: (
      <>
        <span>“안녕하십니까~~ 25년도 AO회장 유용석입니다!</span>
        <span>A(lcohol)O(nly)는 여러분 인생에서 처음일 수 있는</span>
        <span>신입생 생활을 책임져 드립니다!!</span>
        <span>또한 컴공 관련 정보도 많이 얻을 수 있어요.</span>
        <span>안 올 이유가 없다고 볼 수 있죠.”</span>
        <span>스터디 AO에서 같이 성장해 보아요! 🔥</span>
      </>
    ),
  },
  {
    id: 2,
    name: "배종찬",
    position: "코테 마스터",
    phone: "010-4939-1971",
    insta: "bnadgnohz",
    image: AoJc,
    avatar: SjIcon,
    words: (
      <>
        <span>“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span>
        <span>정승처럼 공부하고 개처럼 마시는 스터디 AO! </span>
        <span>군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span>
        <span>MT면 MT, 스터디면 스터디, 회식이면 회식!</span>
        <span>
          뭐 하나 빠지지 않는 저희 AO 스터디에서 바라왔던 대학생활 보내시면
          좋겠습니다 🔥🔥”
        </span>
      </>
    ),
  },
  {
    id: 3,
    name: "천명현",
    position: "AO GPT",
    phone: "010-8915-7264",
    insta: "cmh1448",
    image: Aomh,
    avatar: JhIcon,
    words: (
      <>
        <span>“Fire🔥 AO 20학번 천명현입니다. </span>
        <span>AO만큼 활발한 스터디! 여기 말고 절대 없어요</span>
        <span>같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요" </span>
      </>
    ),
  },
  {
    id: 4,
    name: "박정은",
    position: "비공개",
    phone: "비공개",
    insta: "zenn.zip",
    image: AoJe,
    avatar: YnIcon,
    words: (
      <>
        <span>“안녕하세요 Fire AO 21학번 박정은입니다.</span>
        <span>
          AO는 인맥, 각종 스터디, 취업 정보 모두 챙길 수 있는 스터디에요!
        </span>
        <span>슬기로운 대학생활을 하고 싶다면 AO에서 함께해요🤗</span>
      </>
    ),
  },
  {
    id: 5,
    name: "정진욱",
    position: "only 백엔드",
    phone: "010-3702-9795",
    insta: "oocieyu",
    image: AoJk,
    avatar: SjIcon,
    words: (
      <>
        <span>안녕하세요!</span>
        <span>Fire AO❤️‍🔥 20학번 정진욱입니다</span>
        <span>학교 생활에 꼭 필요한 정보를 얻어가고</span>
        <span>학과 선배들과도 쉽게 친해질 수 있어요👍</span>
        <span>AO 스터디에서 좋은 자리, 재밌는 대학 생활"</span>
        <span>함께 해보는 거 어때요?</span>
      </>
    ),
  },
];

const index = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile>(profiles[0]);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const showChange = () => {
    console.log("Clicked");
  };

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
                ${isFlipped ? "animate-flipped" : ""}`}
              />
            </button>
          </div>

          <div className="flex flex-col w-auto justify-center items-start ml-[60px] -mt-[100px]">
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
          <ExecutiveAvatar
            active={selectedProfile.id === 5}
            profile={profiles[0]}
            onClick={() => {
              setSelectedProfile(profiles[0]);
              setIsFlipped(false);
            }}
          />
          <ExecutiveAvatar
            active={selectedProfile.id === 1}
            profile={profiles[1]}
            onClick={() => {
              setSelectedProfile(profiles[1]);
              setIsFlipped(false);
            }}
          />
          <ExecutiveAvatar
            active={selectedProfile.id === 2}
            profile={profiles[2]}
            onClick={() => {
              setSelectedProfile(profiles[2]);
              setIsFlipped(false);
            }}
          />
          <ExecutiveAvatar
            active={selectedProfile.id === 3}
            profile={profiles[3]}
            onClick={() => {
              setSelectedProfile(profiles[3]);
              setIsFlipped(false);
            }}
          />
          <ExecutiveAvatar
            active={selectedProfile.id === 4}
            profile={profiles[4]}
            onClick={() => {
              setSelectedProfile(profiles[4]);
              setIsFlipped(false);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[87%] mx-auto mt-[40px] mb-[40px]">
        <div className="w-full mx-auto">
          <p className="w-full text-base font-['PRETENDARD-SEMIBOLD'] text-left text-black dark:text-white">
            Developers of AO WEB
          </p>
          {/* <p className="w-full text-[14px] font-['PRETENDARD-BOLD'] text-left  text-[#848484] dark:text-[#CCC]">
            Team. 프링글스 양파맛 좋아합니다
          </p> */}
        </div>

        <div className="flex justify-center items-center flex-wrap mt-[30px] gap-[12px]">
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

        <div className="px-[15%] flex flex-col justify-center items-center mt-[37px] gap-[10px]">
          <DeveloperGroup
            groupName="Infra."
            names={[
              "박세진 Sejin Park",
              "천제희 Jehee Cheon",
              "배종찬 Jongchan Bae",
            ]}
          />

          <DeveloperGroup
            groupName="Frontend."
            names={[
              "박기현 Kihyun Park",
              "김초은 Choeun Kim",
              "유용석 Yongseok Yoo",
              "이창민 Changmin Lee",
            ]}
          />

          <DeveloperGroup
            groupName="Backend."
            names={[
              "송정민 Jeongmin Song",
              "노유빈 Yunin No",
              "정익재 Ikjae Jeong",
              "방준혁 Junhyuk Bang",
              "안서현 Seohyun An",
            ]}
          />
        </div>
      </div>

      <Helmet>
        <title>Intro | Fire AO</title>
        <link rel="canonical" href={`/intro`} />
        <meta name="description" content="Fire AO intro" />
        <meta
          name="keywords"
          content={`fire, AO, Myongji, Univ., MJ, computer, science, major, intro`}
        />
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
        <meta name="twitter:description" content={"Fire AO intro"} />
        <meta name="twitter:image" content={ao} />
      </Helmet>
    </>
  );
};

export default index;
