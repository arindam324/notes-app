import React, {ReactElement} from "react";

import {SunIcon, MoonIcon, PencilSquareIcon} from '@heroicons/react/24/outline'
import {useMantineColorScheme} from '@mantine/core'


const Sidebar = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    return (
        <aside
            className={`max-w-[250px]  w-full min-h-screen bg-gray-200 items-center flex flex-col py-4 justify-between ${colorScheme === 'dark' ? 'bg-[#1a2421] text-white' : ""} `}>
            <nav className={"w-full"}>
                <NavLink Icon={<PencilSquareIcon className={"h-6"}/>} name={"Notes"} isActive/>
            </nav>

            <div className={"w-full flex items-center flex-col"}>
                <button
                    className={"w-[80%]  py-2 rounded-lg font-semibold border-gray-700 hover:border flex space-x-4 justify-center"}
                    onClick={() => toggleColorScheme()}>
                    {colorScheme === 'dark' ? (<SunIcon className={"h-6"}/>) : (<MoonIcon className={"h-6"}/>)}
                    <p>{colorScheme === "dark" ? "Light Theme" : "Dark Theme"}</p>
                </button>
            </div>
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