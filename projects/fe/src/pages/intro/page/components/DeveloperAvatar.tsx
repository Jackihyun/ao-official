import React from 'react'

interface DeveloperAvatarProps {
    src: string
}

const DeveloperAvatar:React.FC<DeveloperAvatarProps> = React.memo(({src}) => {
    return (
        <img
            src={src}
            className="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
            // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
            style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
        />)
});

export default DeveloperAvatar