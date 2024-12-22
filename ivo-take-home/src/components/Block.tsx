import BlockChildRenderer from "./BlockChildRender";
import { MentionProps } from "./Mention";
import { type TextProps } from "./Text";
import type { Mark } from "./types";

type BlockType =  'mention' | 'clause' | 'block' |'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';


export type BlockProps = {
    title: string;  
    type: BlockType;
    children: (BlockProps | TextProps | MentionProps)[];
} & Mark;


function Block({title, type, children, ...mark}: BlockProps) {
    if (type === "block") {
        return (
            <>
                {children.map(
                    (child) => <BlockChildRenderer {...mark} {...child} />
                )}
            </>
        )
    }

    if (type === 'clause') {
        return (
            <div>
                {children.map(
                    (child, index) => <BlockChildRenderer key={index} {...mark} {...child} />
                )}
            </div>
        )
    }

    const handleInput = (e: React.ChangeEvent<HTMLParagraphElement>) => {
        console.log(e.target.innerText);
    }
    if (type === 'p') {
        return (
            <p contentEditable suppressContentEditableWarning onInput={handleInput} style={{ display: 'inline'}}>
                {children.map(
                    (child, index) => <BlockChildRenderer key={index} {...mark} {...child} />
                )}
            </p>
        )
    }

    const Component = type;
    return (
        <Component title={title} >
            {children.map(
                (child, index) => <BlockChildRenderer key={index} {...mark} {...child} />
            )}
        </Component>
    );
}

export default Block;