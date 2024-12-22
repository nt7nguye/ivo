import BlockChildRenderer from "./BlockChildRender";
import { BlockProps } from "./Block";
import { useContext, useEffect, useMemo } from 'react';
import { EditorContext } from "../Provider";
import { TextProps } from "./Text";

export type MentionProps = BlockProps & {
    type: 'mention',
    id: string;
    value: string;
};

function Mention(props: MentionProps) {
    const { id, color, value } = props;

    // Mention doesn't inherit styles if I understand the spec correctly
    const { mentions, updateMention } = useContext(EditorContext);

    // On first mount, check if there's a value in the mention map, if not populate it
    useEffect(() => {
        if (!mentions[id]) {
            updateMention(id, props);
        }
    }, [id, mentions, props, updateMention])

    const handleInput = (e: React.ChangeEvent<HTMLParagraphElement>) => {
        // This doesn't handle child changes yet. But it works for 1 level
        if (e.target.innerText !== value) {
            updateMention(id, { ...props, value: e.target.innerText, children: [{
                ...props.children[0],
                text: e.target.innerText
            } as TextProps] });
        }
    }

    return (
        <div 
            style={{
                backgroundColor: color, 
                display: 'inline-block',
                padding: '0 4px',  // horizontal padding
                borderRadius: '4px'
            }}
            contentEditable
            onInput={handleInput}
        >
            <div>
                {mentions[id] && mentions[id].children.map((child) => (
                    <BlockChildRenderer {...child}/>
                ))}
            </div>
        </div>
    )
}

export default Mention;