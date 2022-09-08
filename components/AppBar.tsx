import {MagnifyingGlassIcon, PlusIcon} from '@heroicons/react/24/outline'
import React from "react";


const Data = [
    {
        id: 0,
        heading: "👏 Meeting Notes",
        description: "Something something important we need to discuss",
        tags: ["Scifi", "anything", "don't know"],
        date: "2 min ago"
    },
    {
        id: 1,
        heading: "🚀 New Project",
        description: "I'm going to create a social media using Next.js and hasura",
        tags: ["Graphql", "Next.js", "React.js"],
        date: "4 days ago"
    },
    {
        id: 2,
        heading: "📚 Collage Notes",
        description: "Have to study exams are near",
        tags: ["Book"],
        date: "1 days ago"
    }

]


const AppBar = () => {
    return (
        <div className={"max-w-[450px]  py-4 border-r w-full min-h-screen"}>
            <div className={"flex items-center px-6 justify-between"}>
                <h2 className={"text-2xl font-semibold"}>Notes</h2>
                <div className={"flex space-x-4"}>
                    <MagnifyingGlassIcon className={"h-6"}/>
                    <PlusIcon className={"h-6"}/>
                </div>
            </div>
            <div className={"w-full space-y-2"}>
                <div className={"w-full text-green-700 font-bold mt-4 px-4 bg-gray-100"}>
                    Pinned
                </div>
                {Data.map(item => (
                    <NotesCard
                        key={item.id}
                        heading={item.heading}
                        description={item.description}
                        tags={item.tags}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    )
}


type NotesCardProps = {
    heading: string,
    description: string,
    tags: string[],
    date: string
}

const NotesCard: React.FC<NotesCardProps> = (props) => {
    const {
        heading,
        description,
        tags,
        date
    } = props;
    return (
        <div className={"px-2 cursor-pointer hover:bg-gray-100 p-2"}>
            <h2 className={"text-2xl font-semibold"}>{heading}</h2>
            <p>{description}</p>
            <div className={"flex text-sm text-gray-500 mt-2 space-x-2"}>
                <p>{date}</p>
                {tags.map(tag => <span className={""}>{`#${tag}`}</span>)}
            </div>
        </div>
    )
}

export default AppBar