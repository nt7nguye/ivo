import { createContext } from 'react';
import { MentionProps } from './components/Mention';

type EditorContext = {
    mentions: Record<string, MentionProps>;
    updateMention: (id: string, value: MentionProps) => void;
};

export const EditorContext = createContext<EditorContext>({
    mentions: {},
    updateMention: () => {},
});
