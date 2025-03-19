import React from 'react'

interface DeveloperGroupProps {
    groupName: string;
    names: string[];
}

const DeveloperGroup: React.FC<DeveloperGroupProps> = React.memo(({ groupName, names }) => {
    return (
        <div className="flex w-64 justify-left items-start">
            <div className="w-[135px] text-[13px] font-['PRETENDARD-MEDIUM'] text-black dark:text-neutral-50">
                {groupName}
            </div>
            <div className="flex flex-col ml-[57px] justify-start w-[135px] text-[10px] font-['PRETENDARD-LIGHT'] text-left text-black" >
                {
                    names.map((name, idx) => (
                        <span
                            key={idx}
                            className="w-auto text-[10px] mt-[1px] font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200">
                            {name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
});

export default DeveloperGroup