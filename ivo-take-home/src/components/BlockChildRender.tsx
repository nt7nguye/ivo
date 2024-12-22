import { BlockProps } from "./Block";
import Block from "./Block";
import Mention from "./Mention";
import { TextProps } from "./Text";
import Text from './Text';

function isText(child: BlockProps | TextProps): child is TextProps{
    return !('type' in child);
}

function BlockChildRenderer(child: BlockProps | TextProps) {
    if (isText(child)) {
        return <Text {...child} />;
        
    }
    if (child.type === 'mention') {
        return <Mention {...child} />;
    }
    return <Block {...child} />;
    
}

export default BlockChildRenderer;