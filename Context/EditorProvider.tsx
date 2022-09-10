import React, {createContext, ReactNode, useContext, useState} from "react";

type EditorProviderType = {
    value: string,
    setValue: (value: string) => void
}

const EditorContext = createContext<EditorProviderType | null>(null);

const EditorProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [value, setValue] = useState<string>("")
    return (
        <EditorContext.Provider value={{value, setValue}}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider

export const useEditor = () => useContext(EditorContext)