import { useState } from "react";
import Block, { BlockProps } from "./components/Block";
import { EditorContext } from "./Provider";

function Editor({input}: {input: BlockProps}) {
    const [mentions, setMentions] = useState<Record<string, string>>({});

    const updateMention = (id: string, value: string) => {
        setMentions(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <EditorContext.Provider value={{ mentions, updateMention }}>
            <Block {...input} />
        </EditorContext.Provider>
    );
}

export default Editor;