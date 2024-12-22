import { BlockProps } from "./Block";
import Block from "./Block";
import Mention from "./Mention";
import { TextProps } from "./Text";
import Text from './Text';
import type { MentionProps } from "./Mention";

function isText(child: BlockProps | TextProps | MentionProps): child is TextProps{
    return !('type' in child);
}

function isMention(child: BlockProps | MentionProps): child is MentionProps{
    return child.type === 'mention';
}

function BlockChildRenderer(child: BlockProps | TextProps | MentionProps) {
    if (isText(child)) {
        return <Text {...child} />;
        
    }
    if (isMention(child)) {
        return <Mention {...child} id={child.id} key={child.id} />;
    }
    return <Block {...child} />;
    
}

export default BlockChildRenderer;