import React from "react";

const Sidebar = () => {
    return (
        <aside className={"max-w-[250px] w-full min-h-screen bg-gray-200"}>
            <NavLink name={"Notes"} isActive/>
        </aside>
    )
}


const NavLink: React.FC<{ name: string, isActive: boolean }> = ({name, isActive}) => {
    return (
        <div>
            {name}
        </div>
    )
}


export default Sidebar