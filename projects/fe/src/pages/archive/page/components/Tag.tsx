import React from 'react'

interface TagProps {
    tag: string | React.ReactNode;
}

const Tag: React.FC<TagProps> = React.memo(({ tag }) => {
    return (
        <div className="rounded-full border border-[#2c2c2c] dark:border-white px-1 py-0.3" >
            <p className="text-xs font-['PRETENDARD-SemiBold'] text-center text-[#191919] dark:text-white/90 text-nowrap px-1 py-[2px] flex flex-row flex-nowrap" >
                {tag}
            </p>
        </div>
    )
});

export default Tag