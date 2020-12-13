import React from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { useDimensions, useFetch, useYouTube } from './hooks';
import { playlist } from './playlist';
import './Karaoke.css';

type KaraokeProps = {
    videoId: string;
    setVideoId: Function;
}

export const Karaoke = ({videoId, setVideoId}: KaraokeProps) => {
    interface ILrcLine {
        lrcLine: LrcLine;
        index: number;
        active: boolean
    }
    const { dimensions: { caption }} = useDimensions();

    const [ song ] = playlist.filter(list => list.videoId === videoId);
    const { data: lrcData } = useFetch(song.lyricsUrl);

    const { milliseconds } = useYouTube(song.videoId, song.videoId);

    const lineRenderer = React.useCallback(({ lrcLine, active}: ILrcLine) => 
        <div className={ active ? 'active-line' : 'inactive-line' }>
            {lrcLine.content}
        </div>
    , []);

    return (
        <section className="karaoke">
            <button onClick={() => setVideoId('')}>Back</button>
            <div id={song.videoId} />
            <Lrc 
                className='lrc'
                lrc={lrcData || ''}
                currentTime={milliseconds}
                lineRenderer={lineRenderer}
                style={{ height: caption.height }}
                spaceTop={0}
            />
        </section>
    );
}