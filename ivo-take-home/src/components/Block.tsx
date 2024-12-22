import Text, { type TextProps } from "./Text";
import type { Mark } from "./types";

type BlockType =  'clause' | 'block' |'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';


export type BlockProps = {
    title: string;  
    type: BlockType;
    children: (BlockProps | TextProps)[];
} & Mark;

function isBlock(child: BlockProps | TextProps): child is BlockProps {
    return 'type' in child;
}

function BlockChildRenderer(child: BlockProps | TextProps) {
    if (isBlock(child)) {
        return <Block {...child} />;
    }
    return <Text {...child} />;
}

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