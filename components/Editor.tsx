import {RichTextEditor} from '@mantine/rte'
import {useState} from "react";

const Editor = () => {

    const [value, setValue] = useState("")

    return (
        <div className={"flex-1"}>
            <RichTextEditor
                value={value}
                onChange={setValue}

            />
        </div>
    )
}

export default Editor