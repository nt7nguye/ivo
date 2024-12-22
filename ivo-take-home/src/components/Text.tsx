
type TextProps = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
}

function Text({text, bold, italic, underline}: TextProps) {
    return (
        <p style={{
            fontWeight: bold ? 'bold' : 'normal', 
            fontStyle: italic ? 'italic' : 'normal', 
            textDecoration: underline ? 'underline' : 'none'
        }}>{text}</p>
    )
}

export default Text;