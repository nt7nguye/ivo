import BlockChildRenderer from "./BlockChildRender";
import { BlockProps } from "./Block";
import { TextProps } from "./Text";
import { Mark } from "./types";

export type MentionProps = {
    children: (BlockProps | TextProps)[];
} & Mark;

function Mention({children, color}: MentionProps) {
    // Mention doesn't inherit styles if I understand the spec correctly
    return (
        <div 
            style={{backgroundColor: color, display: 'inline-block'}}
        >
            {children.map((
                child,
            ) => (
                <BlockChildRenderer {...child} />
            ))}
        </div>
    )
}

export default Mention;