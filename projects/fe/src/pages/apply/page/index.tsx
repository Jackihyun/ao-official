import { Link, ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

import CustomModal from "@/pages/apply/page/components/CustomModal";
import ao from "@/common/assets/images/AO-symbol.png";

const index = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [phoneNum1, setPhoneNum1] = useState("010");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");
  const [aWord, setAWord] = useState("");
  const [stuIdErrorMessage, setStuIdErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [awordErrorMessage, setAwordErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const resetForm = () => {
    setStudentId("");
    setName("");
    setAWord("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStuIdErrorMessage("");
    setNameErrorMessage("");
    setAwordErrorMessage("");
    setPhoneErrorMessage("");

    setModalText("지원이 완료되었습니다.");

    fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
        name,
        phoneNum: `${phoneNum1}-${phoneNum2}-${phoneNum3}`,
        aWord,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          return res.json();
        } else if (res.ok) {
          resetForm();

          setModalOpen(true);
        }
      })
      .then((json) => {
        if (json) {
          console.log(json);
          if (json.stuIdErrorMessage && json.stuIdErrorMessage.length > 0) {
            setStuIdErrorMessage(json.stuIdErrorMessage);
          }
          if (json.nameErrorMessage && json.nameErrorMessage.length > 0) {
            setNameErrorMessage(json.nameErrorMessage);
          }
          if (json.aWordErrorMessage && json.aWordErrorMessage.length > 0) {
            setAwordErrorMessage(json.aWordErrorMessage);
          }
          if (json.phoneNumErrorMessage && json.phoneNumErrorMessage.length > 0) {
            setPhoneErrorMessage(json.phoneNumErrorMessage);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <ScrollRestoration />

      {/* Header */}
      <nav className="w-full border-b border-[#0d0d0d] mb-[42px] py-[11px]">
        <Link
          to="/"
          className="block text-center text-black dark:text-white font-['Montserrat'] font-black text-3xl"
        >
          Fire AO
        </Link>
      </nav>

      <main className="w-full min-h-screen bg-white dark:bg-black px-4 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="max-w-[339px]">
          {/* 학번 */}
          <label className="w-[32px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]">
            학번
            <input
              type="text"
              onInput={(e) => setStudentId(e.currentTarget.value)}
              className="block font-['PRETENDARD-LIGHT'] text-left text-neutral-500 border-none focus:outline-none
                w-full h-[47px] px-3.5 py-3 rounded-lg bg-[#DCDCDC] dark:bg-[#0d0d0d]"
              placeholder="학번을 입력해주세요."
            />
          </label>
          <p className="font-['PRETENDARD-REGULAR'] block h-[26px] text-[11px] text-left text-[#d64142]">
            {stuIdErrorMessage ? stuIdErrorMessage : " "}
          </p>

          {/* 이름 */}
          <label
            className="font-['PRETENDARD-SEMIBOLD'] w-[32px] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="name"
          >
            이름
            <input
              type="text"
              id="name"
              onInput={(e) => setName(e.currentTarget.value)}
              className="block font-['PRETENDARD-LIGHT'] text-left text-neutral-500 border-none focus:outline-none
                w-full h-[47px] px-3.5 py-3 rounded-lg bg-[#DCDCDC] dark:bg-[#0d0d0d]"
              placeholder="이름을 입력해주세요."
            />
          </label>
          <p className="font-['PRETENDARD-REGULAR'] block h-[26px] text-[11px] text-left text-[#d64142]">
            {nameErrorMessage}
          </p>

          {/* 전화번호 */}
          <label
            className="font-['PRETENDARD-SEMIBOLD'] w-[32px] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="phoneNumber"
          >
            전화번호
            <div className="flex flex-row gap-1 w-[339px] text-[#000] dark:text-[#CCC] font-sans">
              <input
                className="bg-[#DCDCDC] dark:bg-[#0d0d0d] w-1/4 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                placeholder="010"
                onInput={(e) => {
                  if (e.currentTarget.value.length <= 3) {
                    console.log(e.currentTarget.value.length);
                    setPhoneNum1(e.currentTarget.value);
                  } else {
                    e.currentTarget.value = phoneNum1;
                  }
                }}
              />
              -
              <input
                className="bg-[#DCDCDC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                placeholder="1234"
                onInput={(e) => {
                  if (e.currentTarget.value.length <= 4)
                    setPhoneNum2(e.currentTarget.value);
                  else e.currentTarget.value = phoneNum2;
                }}
              />
              -
              <input
                className="bg-[#DCDCDC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                placeholder="5678"
                onInput={(e) => {
                  if (e.currentTarget.value.length <= 4)
                    setPhoneNum3(e.currentTarget.value);
                  else e.currentTarget.value = phoneNum3;
                }}
              />
            </div>
          </label>
          <p className="font-['PRETENDARD-REGULAR'] block h-[26px] text-[11px] text-left text-[#d64142]">
            {phoneErrorMessage}
          </p>

          {/* 한 마디 남기기 */}
          <label
            className="inline-block w-[127px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="message"
          >
            한 마디 남기기
            <textarea
              id="message"
              onInput={(e) => setAWord(e.currentTarget.value)}
              className="w-[339px] h-24 relative px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]
              font-['PRETENDARD-LIGHT'] text-left text-[#7f7f7f] dark:[#7f7f7f] border-none focus:outline-none resize-none"
              placeholder="자유롭게 한 마디를 남겨주세요."
            />
          </label>
          <p className="font-['PRETENDARD-REGULAR'] block h-[26px] text-[11px] text-left text-[#d64142]">
            {awordErrorMessage}
          </p>

          <button
            type="submit"
            className="my-[20px] px-[136px] py-3.5 rounded-3xl bg-[#333] font-['PRETENDARD-SEMIBOLD'] active:scale-95 text-[18px] text-center active:bg-[#555] text-neutral-200"
          >
            지원하기
          </button>
        </form>
      </main>

      <CustomModal
        isVisible={modalOpen}
        onClose={() => setModalOpen(false)}
        text={modalText}
      />

      <Helmet>
        <title>Apply | Fire AO</title>
        <link rel="canonical" href={`/apply`} />
        <meta name="description" content="Fire AO apply" />
        <meta
          name="keywords"
          content={`fire, AO, Myongji, Univ., MJ, computer, science, major, apply`}
        />
        <meta name="author" content="FireAO" />/
        <meta property="og:title" content="apply | Fire AO" />
        <meta property="og:description" content="Fire AO apply" />
        <meta property="og:image" content={ao} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fire AO" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:url" content={`/apply`} />
        <meta name="twitter:title" content={`apply | Fire AO`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={"Fire AO apply"} />
        <meta name="twitter:image" content={ao} />
      </Helmet>
    </>
  );
};

export default index;
