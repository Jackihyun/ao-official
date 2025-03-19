import jongChanBae from "@/common/assets/images/종찬이형.jpg";
import jeHeeCheon from "@/common/assets/images/나2.png";
import seJinPark from "@/common/assets/images/세진이.png";
import choEunShin from "@/common/assets/images/신초은.jpg";
import yunAChoi from "@/common/assets/images/최윤아.jpg";

import { Executive } from "@/pages/home/page/types/executive";

export const executives: Executive[] = [
  {
    name: "배종찬",
    id: 1,
    description: (
      <>
        안녕하십니까! AO의 배종찬입니다.
        <br />
        삼촌 아니고 형입니다. 정승처럼 공부하고 개처럼 마시는 스터디 AO!
        <br />
        군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다.
        <br />
        MT면 MT,
        스터디면 스터디, 회식이면 회식 뭐 하나 빠지지 않는 저희 AO 스터디에서
        바라왔던 대학생활 보내시면 좋겠습니다.
      </>
    ),
    avatar: jongChanBae,
  },
  {
    name: "박세진",
    id: 2,
    description: (
      <>
        안녕하세요~~ 19학번 석유 박세진입니다! <br />
        A(lcohol)O(nly)는 여러분 인생에서 처음일 수 있는 신입생 생활을 책임져
        드립니다!! 또한 컴공 관련 정보도 많이 얻을 수 있어요.
        <br />
        안 올 이유가 없다고 볼 수
        있죠.
        <br />
        스터디 AO에서 같이 성장해 보아요!
      </>
    ),
    avatar: seJinPark,
  },
  {
    name: "천제희",
    id: 3,
    description: (
      <>
        안녕하십니까!
        <br />
        Fire🔥 AO 18학번 천제희입니다.
        <br />
        AO만큼 활발한 스터디! 여기 말고 절대 없어요.
        <br />
        같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요.
        <br />
      </>
    ),
    avatar: jeHeeCheon,
  },
  {
    name: "신초은",
    id: 4,
    description: (
      <>
        안녕하세요 FIRE AO 20학번 신초은입니다☺
        <br />
        족보, 인맥, 정보, 각종 스터디 등 생각보다 얻어갈 수 있는게 정말
        많아요!
        <br />밥 잘 사주는 스터디 AO에서 슬기로운 대학생활 해보아요.
      </>
    ),
    avatar: choEunShin,
  },
  {
    name: "최윤아",
    id: 5,
    description: (
      <>
        안녕하세요 스터디 AO 21학번 최윤아입니다!!
        <br />
        학과 생활 하면서 필요한 정보들과 족보, 인맥 또한 행복하고 즐겁게
        얻어갈 수 있습니다🫶
        <br />
        좋은 사람들을 많이 사귀고, 성적을 잘 받고 싶은 학우들이라면 함께
        해요!🍀
      </>
    ),
    avatar: yunAChoi,
  },
];