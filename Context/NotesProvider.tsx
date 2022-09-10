import React, {createContext, ReactNode, useContext, useState} from "react";

type NotesProviderType = {
    notesId: string,
    setNotesId: (notesId: string) => void
}

const NotesContext = createContext<NotesProviderType | null>(null)

const NotesProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [notesId, setNotesId] = useState<string>("")
    return (
        <NotesContext.Provider value={{notesId, setNotesId}}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider

export const useNotes = () => useContext(NotesContext)