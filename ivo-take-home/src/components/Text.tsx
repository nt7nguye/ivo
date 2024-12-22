
type TextProps = {
    value: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
}

function Text({value, bold, italic, underline}: TextProps) {
    return (
        <p style={{
            fontWeight: bold ? 'bold' : 'normal', 
            fontStyle: italic ? 'italic' : 'normal', 
            textDecoration: underline ? 'underline' : 'none'
        }}>{value}</p>
    )
}

export default Text;