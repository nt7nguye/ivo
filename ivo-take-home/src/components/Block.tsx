import Text, { type TextProps } from "./Text";

type BlockType =  'block' |'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type BlockProps = {
    title: string;  
    type: BlockType;
    children: (BlockProps | TextProps)[];
}

function isBlock(child: BlockProps | TextProps): child is BlockProps {
    return 'type' in child;
}

function Block({title, type, children}: BlockProps) {
    if (type === "block") {
        return (
            <>
                {children.map(
                    (child) => {
                        if (isBlock(child)) {
                            return <Block {...child} />;
                        }
                        return <Text {...child} />;
                    }
                )}
            </>
        )
    }

    const Component = type;
    return (
        <Component title={title}>
            {children.map(
                (child) => {
                    if (isBlock(child)) {
                        return <Block {...child} />;
                    }
                    return <Text {...child} />;
                }
            )}
        </Component>
    );
}

export default Block;