import React, {useMemo, useState} from "react";
import {MagnifyingGlassIcon, PlusIcon} from '@heroicons/react/24/outline'
import {Modal, ScrollArea, useMantineColorScheme, Input, Textarea, Button} from '@mantine/core'
import {useEditor} from "../Context/EditorProvider";

const Data = [
    {
        id: 0,
        heading: "👏 Meeting Notes",
        description: "Something something important we need to discuss",
        tags: ["Scifi", "anything", "don't know"],
        date: "2 min ago",
        value: "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi this is Arindam Roy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>\n" +
            "<p>&nbsp; i'm a full stack developer with over 2+ years of experience . I've made many applications in this 2 years . I'm also the creator of this application</p>"
    },
    {
        id: 1,
        heading: "🚀 New Project",
        description: "I'm going to create a social media using Next.js and hasura",
        tags: ["Graphql", "Next.js", "React.js"],
        date: "4 days ago",
        value: "<h1>Here are some more example of This App</h1>\n" +
            "<ul>\n" +
            "<li>you can add image</li>\n" +
            "<li>you can add video</li>\n" +
            "<li>you can various type of text</li>\n" +
            "<li>you can use links too</li>\n" +
            "</ul>"
    },
    {
        id: 2,
        heading: "📚 Collage Notes",
        description: "Have to study exams are near",
        tags: ["Book"],
        date: "1 days ago",
        value: "<p>hi this is a simple value</p>"
    },
]


const AppBar = () => {
    const {colorScheme} = useMantineColorScheme()
    const [opened, setOpen] = useState(false)

    const theme = useMantineColorScheme()

    return (
        <div
            className={`max-w-[450px]  pt-4 border-r w-full min-h-screen ${colorScheme === 'dark' ? "bg-black text-white" : ""} `}>
            <Modal
                opened={opened}
                overlayColor={theme.colorScheme === 'dark' ? "#101113" : "#909296"}
                overlayOpacity={0.55}
                overlayBlur={3}
                onClose={() => setOpen(false)}
                title={"create a new Notes"}
            >
                <Input
                    placeholder="enter your notes name"
                />
                <Textarea
                    my={"xs"}
                    placeholder={"add a little description for your notes"}
                />
                <button className={"px-10 py-2  rounded-lg bg-black text-white"}>Submit</button>
            </Modal>
            <div className={"flex items-center px-6 justify-between"}>
                <h2 className={"text-2xl font-semibold"}>Notes</h2>
                <div className={"flex space-x-4"}>
                    <MagnifyingGlassIcon className={"h-6"}/>
                    <PlusIcon onClick={() => setOpen(true)} className={"h-6 cursor-pointer"}/>
                </div>
            </div>
            <div className={"w-full space-y-2"}>
                <ScrollArea style={{height: "95vh"}} scrollbarSize={4} offsetScrollbars={true}>
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
                            value={item.value}
                        />
                    ))}
                </ScrollArea>
            </div>
        </div>
    )
}


type NotesCardProps = {
    heading: string,
    description: string,
    tags: string[],
    date: string,
    value?: string
}

const COLORS = [
    "#1690FF",
    "#e6005b",
    "#e0d040",
    "#40e0d0",
    "#0b5e70"
]


const NotesCard: React.FC<NotesCardProps> = (props) => {
    const {
        heading,
        description,
        tags,
        date,
        value
    } = props;
    {/* TODO: find another way rather than calling the hook twice */
    }
    const {colorScheme} = useMantineColorScheme()

    const randomColor = useMemo(() => {
        const randomInt = Math.floor(Math.random() * 5) + 1;
        return COLORS[randomInt]
    }, [COLORS])

    const editor = useEditor()

    return (
        <div onClick={() => {
            value && editor?.setValue(value);
        }}
             className={`px-2 cursor-pointer    p-2 ${colorScheme === 'dark' ? 'hover:bg-gray-600 ' : 'hover:bg-gray-100'}`}>
            <h2 style={{color: randomColor}}
                className={"text-2xl font-semibold"}>{heading}</h2>
            <p>{description}</p>
            <div className={"flex text-sm text-gray-500 mt-2 space-x-2"}>
                <p>{date}</p>
                {tags.map(tag => <span className={""}>{`#${tag}`}</span>)}
            </div>
        </div>
    )
}


export default AppBar