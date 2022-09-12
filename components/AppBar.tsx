import React, {useState} from "react";
import {MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/outline";
import {
    Modal,
    ScrollArea,
    useMantineColorScheme,
    Input,
    Textarea
} from "@mantine/core";

import {useNotes} from "Context/NotesProvider";
import dynamic from "next/dynamic";

const NotesCard = dynamic(() => import("../components/NotesCard"), {
    ssr: false
})

const AppBar = () => {
    const {colorScheme} = useMantineColorScheme();
    const [opened, setOpen] = useState(false);

    const notes = useNotes();

    return (
        <div
            className={`max-w-[450px]  pt-4 border-r w-full min-h-screen ${
                colorScheme === "dark" ? "bg-black text-white" : ""
            } `}
        >
            <Modal
                opened={opened}
                overlayColor={colorScheme === "dark" ? "#101113" : "#909296"}
                overlayOpacity={0.55}
                overlayBlur={3}
                onClose={() => setOpen(false)}
                title={"create a new Notes"}
            >
                <Input placeholder="enter your notes name"/>
                <Textarea
                    my={"xs"}
                    placeholder={"add a little description for your notes"}
                />
                <button className={"px-10 py-2  rounded-lg bg-black text-white"}>
                    Submit
                </button>
            </Modal>
            <div className={"flex items-center px-6 justify-between"}>
                <h2 className={"text-2xl font-semibold"}>Notes</h2>
                <div className={"flex space-x-4"}>
                    <MagnifyingGlassIcon className={"h-6"}/>
                    <PlusIcon
                        onClick={() => setOpen(true)}
                        className={"h-6 cursor-pointer"}
                    />
                </div>
            </div>
            <div className={"w-full space-y-2"}>
                <ScrollArea
                    style={{height: "95vh"}}
                    scrollbarSize={4}
                    offsetScrollbars={true}
                >
                    <div
                        className={"w-full text-green-700 font-bold mt-4 px-4 bg-gray-100"}
                    >
                        Pinned
                    </div>
                    {notes?.notes.map((item) => (
                        <NotesCard
                            key={item.id}
                            heading={item.heading}
                            description={item.description}
                            tags={item.tags}
                            date={item.date}
                            value={item.content}
                        />
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
};

export default AppBar;
