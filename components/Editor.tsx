import {ScrollArea, TypographyStylesProvider, useMantineColorScheme} from '@mantine/core'
import {RichTextEditor} from '@mantine/rte'

import {useEditor} from "../Context/EditorProvider";


const DB = [
    {
        id: "🚀 New Project",
        value: "<h2>Hi this is a new Project</h2>"
    },
    {
        id: "📚 Collage Notes",
        value: "<h2>Hi this is a new Project</h2>"
    },
    {
        id: "👏 Meeting Notes",
        value: "<h2>Hi this is a new Project</h2>"
    }
]


const Editor = () => {
    const editor = useEditor()
    const {colorScheme} = useMantineColorScheme()

    return (
        <div className={`flex-1 min-h-screen ${colorScheme === 'dark' ? "bg-black text-white" : ""} `}>
            <ScrollArea style={{height: "800px"}} offsetScrollbars scrollbarSize={4}>
                {editor && (
                    <RichTextEditor
                        value={editor.value}
                        onChange={editor.setValue}
                    />
                )}

                {/*<TypographyStylesProvider>*/}
                {/*    {editor?.value && (*/}
                {/*        <div dangerouslySetInnerHTML={{__html: editor.value}}/>*/}
                {/*    )}*/}

                {/*</TypographyStylesProvider>*/}

            </ScrollArea>
        </div>
    )
}

export default Editor


































