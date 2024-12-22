
type TextProps = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    color?: string;
}

function Text({text, bold, italic, underline, color}: TextProps) {
    return (
        <p style={{
            fontWeight: bold ? 'bold' : 'normal', 
            fontStyle: italic ? 'italic' : 'normal', 
            textDecoration: underline ? 'underline' : 'none',
            color: color ? color : 'white',
            display: 'inline'
        }}>{text}</p>
    )
}

export default Text;