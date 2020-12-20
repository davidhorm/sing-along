import { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from './hooks';

export type SongMetadata = {
    videoId: string;
    lyricsFileName: string;
    cc?: boolean;
}

type ContextState = 
    | { status: 'NOT_LOADED' | 'LOADING' | 'ERROR', songList: SongMetadata[] }
    | { 
        status: 'LOADED';
        songList: SongMetadata[];
        selectedSong?: SongMetadata;
};
const SongListContext = createContext<ContextState | null>(null);

// export const useItemData = (): ContextState => {
//     const contextState = useContext(SongListContext);
//     if (!contextState) {
//         throw new Error('useItemData must be used within <ItemDataProvider />');
//     }
//     return contextState;
// };

type Props = {
    videoId: string;
}
export const SongListProvider: React.FC<Props> = ({ children, videoId }) => {
    const [state, setState] = useState<ContextState>();

    useEffect(() => {
        switch (state.status) {
            case 'NOT_LOADED':
                setState(s => ({ ...s, status: 'LOADING', songList: [] }));
                const { data } = useFetch('/sing-along/lyrics/index.json');
                const songList: SongMetadata[] = data ? JSON.parse(data) : [];
                const selectedFirstSong = songList.filter(song => song.videoId === videoId)[0];
                setState(s => ({ ...s, status: 'LOADED', songList, selectedSong: selectedFirstSong }));
                break;
            case 'LOADED':
                const selectedSong = state.songList.filter(song => song.videoId === videoId)[0];
                setState(s => ({ ...s, selectedSong }));
                break;
            default:
                break;
        }
    }, [state.songList, state.status, videoId]);

    return <SongListContext.Provider value={state}>{children}</SongListContext.Provider>;
};