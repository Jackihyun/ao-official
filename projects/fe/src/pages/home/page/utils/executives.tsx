import jongChanBae from "@/common/assets/images/종찬이형.jpg";
import yooYongSeok from "@/common/assets/images/유용석사진.jpg";
import myungHyeonCheon from "@/common/assets/images/myunghyun.jpg";
import jungEunPark from "@/common/assets/images/parkjungen.jpeg";
import jungJinWook from "@/common/assets/images/jungjinuk.jpeg";

import { Executive } from "@/pages/home/page/types/executive";

export const executives: Executive[] = [
  {
    name: "유용석",
    id: 1,
    description: (
      <>
        “안녕하십니까~~ 25년도 AO회장 유용석입니다!
        <br />
        A(lcohol)O(nly)는 여러분 인생에서 처음일 수 있는
        <br />
        신입생 생활을 책임져 드립니다!!
        <br />
        또한 컴공 관련 정보도 많이 얻을 수 있어요.
        <br />
        스터디 AO에서 같이 성장해 보아요! 🔥
      </>
    ),
    avatar: yooYongSeok,
  },
  {
    name: "배종찬",
    id: 2,
    description: (
      <>
        안녕하십니까! AO의 배종찬입니다.
        <br />
        삼촌 아니고 형입니다. 정승처럼 공부하고 개처럼 마시는 스터디 AO!
        <br />
        군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다.
        <br />
        MT면 MT, 스터디면 스터디, 회식이면 회식 뭐 하나 빠지지 않는 저희 AO
        스터디에서 바라왔던 대학생활 보내시면 좋겠습니다.
      </>
    ),
    avatar: jongChanBae,
  },
  {
    name: "천명현",
    id: 3,
    description: (
      <>
        안녕하십니까!
        <br />
        Fire🔥 AO 20학번 천명현입니다.
        <br />
        AO만큼 활발한 스터디! 여기 말고 절대 없어요.
        <br />
        같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요.
        <br />
      </>
    ),
    avatar: myungHyeonCheon,
  },
  {
    name: "박정은",
    id: 4,
    description: (
      <>
        안녕하세요 Fire AO 21학번 박정은입니다.
        <br /> AO는 인맥, 각종 스터디, 취업 정보 모두 챙길 수 있는 스터디에요!
        <br />
        슬기로운 대학생활을 하고 싶다면 AO에서 함께해요🤗
        <br />
      </>
    ),
    avatar: jungEunPark,
  },
  {
    name: "정진욱",
    id: 5,
    description: (
      <>
        안녕하세요! Fire AO❤️‍🔥 20학번 정진욱입니다/
        <br />
        학교 생활에 꼭 필요한 정보를 얻어가고 학과
        <br /> 선배들과도 쉽게 친해질 수 있어요👍
        <br />
        AO 스터디에서 좋은 자리, 재밌는 대학 생활 함께 해보는 거 어때요?
      </>
    ),
    avatar: jungJinWook,
  },
];
