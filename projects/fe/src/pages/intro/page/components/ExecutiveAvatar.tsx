import React from 'react'

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

interface ExecutiveAvatarProps {
    profile: Profile;
    onClick: () => void;
    active: boolean;
}

const ExecutiveAvatar:React.FC<ExecutiveAvatarProps> = React.memo(({profile, onClick, active}) => {
    return (
        <div
            className={`flex flex-col justify-center items-center flex-grow-0 flex-shrink-0
            ${active && 'animate-bounce'}`}
            onClick={onClick}
        >
            <div className="w-[79px] h-[75px] mb-[10px] flex justify-center">
                <button >
                    <img
                        src={profile.image}
                        className={`w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover
                            {isclick ? 'animate-bounce' : ' '}`}
                        // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
                        style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
                    />
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-px">
                <p
                    className="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
                >
                    {profile.name}
                </p>
                <p
                    className="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#ccc]"
                >
                    {profile.position}
                </p>
            </div>
        </div>)
});

export default ExecutiveAvatar