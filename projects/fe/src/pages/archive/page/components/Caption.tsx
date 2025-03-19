import React from "react";

interface CaptionProps {
    title: string;
    explanation: string;
    image: string;
}

const Slide: React.FC<CaptionProps> = React.memo(({ title, explanation, image }) => {
    return (
        <div
            className="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px] flex flex-col items-center"
        >
            <img src={image} alt="MT1_image" className="object-cover" />
            <div
                className="relative bottom-[70px] bg-white/[0.15] font-['PRETENDARD-BOLD'] backdrop-blur-md w-[164px] h-[49px] rounded-2xl
            px-[27px] py-[5.5px]"
            >
                <p className=" text-[15px]  text-white">
                    {title}
                </p>
                <p className=" text-[10px] text-white">
                    {explanation}
                </p>
            </div>
        </div>
    )
});

export default Slide