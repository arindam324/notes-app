import React, {ReactElement} from "react";

import {PencilSquareIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {
    return (
        <aside className={"max-w-[250px]  w-full min-h-screen bg-gray-200 flex flex-col py-4"}>
            <NavLink Icon={<PencilSquareIcon className={"h-6"}/>} name={"Notes"} isActive/>
        </aside>
    )
}


const NavLink: React.FC<{ name: string, Icon: ReactElement, isActive: boolean }> = ({name, Icon, isActive}) => {
    return (
        <div
            className={`flex items-center w-[80%] mx-auto space-x-3 cursor-pointer p-3   ${isActive ? "bg-gray-400 font-semibold rounded-lg" : ""}`}>
            {Icon}
            <p>{name}</p>
        </div>
    )
}


export default Sidebar