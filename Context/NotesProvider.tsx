import React, {createContext, ReactNode, useContext, useState} from "react";

type Notes = {
    id: string;
    heading: string;
    description: string;
    content: string;
    tags: string[];
    date: string;
};

type NotesContext = {
    notes: Notes[];
    //   setNotes: (notes: Notes[]) => void;
};

const Notes: Notes[] = [
    {
        id: "areyouhappunow",
        heading: "😃 new Project",
        description: "I'm goping to work in a new Project ",
        content: "<h1>i'm goiung to work in a new Project </h1>",
        tags: ["project", "work"],
        date: Date.now().toLocaleString(),
    },
    {
        id: "whateveridon'tcare",
        heading: "🚀 Blog Ideas",
        tags: ["ideas", "blog"],
        date: Date.now().toLocaleString(),
        description: "Some content ideas for my blog ",
        content:
            "<ol><li>How to use React effectively</li><li>How to create a full stack app using prisma, react and typescript</li><li>Begginer guide to microservices using AWS lambda </li></ol>",
    },
    {
        id: "hellofromtheotherside",
        heading: "Steps to get a full stack position",
        description: "",
        content: "<h1></h1>",
        date: Date.now().toLocaleString(),
        tags: ["empty", "no-ideas"],
    },
];

const NotesContext = createContext<NotesContext | null>(null);

const NotesProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [notes, setNotes] = useState<Notes[]>(Notes);

    return (
        <NotesContext.Provider value={{notes}}>{children}</NotesContext.Provider>
    );
};

export default NotesProvider;

export const useNotes = () => useContext(NotesContext);
