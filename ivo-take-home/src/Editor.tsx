import { useState } from "react";
import Block, { BlockProps } from "./components/Block";
import { EditorContext } from "./Provider";
import { MentionProps } from "./components/Mention";

function Editor({input}: {input: BlockProps}) {
    const [mentions, setMentions] = useState<Record<string, MentionProps>>({});

    const updateMention = (id: string, value: MentionProps) => {
        setMentions({
            ...mentions,
            [id]: value,
        })
        console.log('value', value);
        console.log('id', id);
        console.log('mentions', mentions);
    };

    return (
        <EditorContext.Provider value={{ mentions, updateMention }}>
            <Block {...input} />
        </EditorContext.Provider>
    );
}

export default Editor;