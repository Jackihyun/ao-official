import "@/pages/home/page/assets/css/Executives.css";

import { useState, useEffect } from "react";
import CardNews from "@/pages/home/page/components/CardNews";

import { Executive } from "@/pages/home/page/types/executive";

import ApplyButton from "@/common/components/ApplyButton";
import { executives } from "@/pages/home/page/utils/executives";
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";

function Executives() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    setSelectedExecutive(executives[0]);
  }, []);

  return (
    <>
      <div className="executive-container dark:bg-black bg-white">
        <div className="exeEng text-black dark:text-white">
          <p>Fire AO</p>
        </div>
        <div className="exeKor text-black dark:text-white">
          <p>Fire AO와 함께하는 임원진</p>
        </div>
        <div className="scroll-container">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className={`executive cursor-pointer 
              ${selectedExecutive?.id === executive.id - 1 && "animate-bounce"}
              ${selectedExecutive?.id === executives.length && executive.id === 1 && "animate-bounce"}`}
              onClick={() => setSelectedExecutive(executive)}
            >
              <img
                src={executive.avatar}
                alt={executive.name}
                className="people rounded-full w-[80px] border-[3.5px] border-[rgb(255,255,255,0)]"
                style={{
                  backgroundImage: `linear-gradient(#fff, #fff), ${isDarkMode ? 'linear-gradient(to bottom, #21ECC7 0%,  #8672F3 100%)' : 'linear-gradient(to bottom, #51D8D8 0%,  #9D26E6 100%)'}`,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              />
              <p className="executive-name text-black/70 dark:text-white font-['PRETENDARD-SEMIBOLD']">{executive.name}</p>
            </div>
          ))}
        </div>
        {selectedExecutive && (
          <CardNews
            name={selectedExecutive.name}
            description={selectedExecutive.description}
            image={selectedExecutive.avatar}
          />
        )}
        <ApplyButton />
        <div className='figure2 -z-[1]'></div>
        <div className='figure6 -z-[1]'></div>
      </div>
    </>
  );
}

export default Executives;
