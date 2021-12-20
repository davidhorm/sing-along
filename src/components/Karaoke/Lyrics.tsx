import { useCallback, useEffect, useState } from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import type { MusicVideo } from '../../App';

interface LyricsProps extends Omit<MusicVideo, 'videoId'> {
    captionHeight: number;
    milliseconds: number;
}

export const Lyrics = ({ milliseconds, captionHeight, songTitle, songArtist, cc }: LyricsProps) => {
    const [lrcData, setLrcData] = useState('');
    useEffect(() => {
        const lyricUrl = !cc ? `/sing-along/lyrics/${songTitle} - ${songArtist}.lrc` : '';
        fetch(lyricUrl)
            .then(response => response.text())
            .then(setLrcData);
    }, [songTitle, songArtist, cc]);

    interface ILrcLine {
        lrcLine: LrcLine;
        index: number;
        active: boolean
    }
    const lineRenderer = useCallback(({ lrcLine, active }: ILrcLine) =>
        <div className={active ? 'active-line' : 'inactive-line'}>
            {lrcLine.content}
        </div>
        , []);

    return <Lrc
        className='lrc'
        lrc={!cc ? lrcData : '[00:00.0] [CC Available]'}
        currentTime={milliseconds}
        lineRenderer={lineRenderer}
        style={{ height: `calc(${captionHeight}px - 4em)`, overflow: 'hidden' }}
        spaceTop={0}
    />
}