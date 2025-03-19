import "@/pages/home/page/assets/css/FirstIntro.css";

function FirstIntro() {
  return (
    <div className="firstIntro-container dark:bg-black">
      <div className="Text text-black/70 dark:text-white">
        <div className="text">
          <p id="FIFire" className="text-[#121212]/90 dark:text-white">
            Fire&nbsp;
            </p>
          <p id="FIAO">AO</p>
        </div>
        <div className="plus">
          <p id="A">Alpha</p>&nbsp;
          <p>부터</p>&nbsp;
          <p id="O">Omega</p>&nbsp;
          <p>까지!</p>
        </div>
        <div className="ex">
          <p className="font-['Pretendard-BOLD'] dark:font-['Pretendard-LIGHT']">대학생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.</p>
        </div>
      </div>
      <div className="figure1"></div>
      <div className="figure2"></div>
      <div className="figure3"></div>
    </div>
  );
}

export default FirstIntro;
