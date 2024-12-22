import { Mark } from "./types";

export type TextProps = {
    text: string;
} & Mark;

function Text({text, bold, italic, underline, color}: TextProps) {
    const handleInput = (e: React.ChangeEvent<HTMLParagraphElement>) => {
        console.log(e.target.innerText);
    }

    return (
        <p contentEditable suppressContentEditableWarning onInput={handleInput}
            style={{
            fontWeight: bold ? 'bold' : 'normal', 
            fontStyle: italic ? 'italic' : 'normal', 
            textDecoration: underline ? 'underline' : 'none',
            color: color ? color : 'white',
            display: 'inline',
            whiteSpace: 'pre-wrap'
        }}>{text}</p>
    )
}

export default Text;