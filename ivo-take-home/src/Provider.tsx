import { createContext } from 'react';
import { BlockProps } from './components/Block';

type EditorContext = {
    mentions: Record<string, BlockProps>;
    updateMention: (id: string, value: string) => void;
};

export const EditorContext = createContext<EditorContext>({
    mentions: {},
    updateMention: () => {},
});
