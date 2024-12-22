import BlockChildRenderer from "./BlockChildRender";
import { BlockProps } from "./Block";
import { TextProps } from "./Text";
import { Mark } from "./types";

export type MentionProps = {
    children: (BlockProps | TextProps)[];
} & Mark;

function Mention({children, color}: MentionProps) {
    return (
        <div 
            style={{
                backgroundColor: color, 
                display: 'inline-block',
                padding: '0 4px',  // horizontal padding
                borderRadius: '4px'
            }}
        >
            {children.map((child) => (
                <BlockChildRenderer {...child} />
            ))}
        </div>
    )
}

export default Mention;