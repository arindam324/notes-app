import {useState} from "react";
import {RichTextEditor} from '@mantine/rte'
import {ScrollArea} from '@mantine/core'


const Editor = () => {
    const [value, setValue] = useState("")
    return (
        <div className={"flex-1 min-h-screen "}>
            <ScrollArea style={{height: "800px"}} offsetScrollbars scrollbarSize={4}>
                <RichTextEditor
                    value={value}
                    onChange={setValue}
                    className={" "}
                />
            </ScrollArea>

        </div>
    )
}

export default Editor