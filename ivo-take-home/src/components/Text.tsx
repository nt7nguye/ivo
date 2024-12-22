import { Mark } from "./types";

export type TextProps = {
    text: string;
} & Mark;

function Text({text, bold, italic, underline, color}: TextProps) {
    return (
        <span style={{
            fontWeight: bold ? 'bold' : 'normal', 
            fontStyle: italic ? 'italic' : 'normal', 
            textDecoration: underline ? 'underline' : 'none',
            color: color ? color : 'white',
            display: 'inline',
            whiteSpace: 'pre-wrap'
        }}>{text}</span>
    )
}

export default Text;