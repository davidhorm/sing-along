import React from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { useDimensions, useFetch, useYouTube } from '../hooks';
import './Karaoke.css';
import { SongMetadata } from "../App";

type KaraokeProps = {
    selectedSong: SongMetadata;
    setSelectedSong: Function;
}

export const Karaoke = ({selectedSong, setSelectedSong}: KaraokeProps) => {
    interface ILrcLine {
        lrcLine: LrcLine;
        index: number;
        active: boolean
    }
    const { dimensions: { video, caption }} = useDimensions();

    const { data: lrcData } = useFetch(`/lyrics/${selectedSong.lyricsFileName}`);

    const { milliseconds } = useYouTube({
        videoId: selectedSong.videoId,
        videoWidth: video.width,
        videoHeight: video.height,
    });

    const lineRenderer = React.useCallback(({ lrcLine, active}: ILrcLine) => 
        <div className={ active ? 'active-line' : 'inactive-line' }>
            {lrcLine.content}
        </div>
    , []);

    return (
        <section className="karaoke">
            <button onClick={() => setSelectedSong(null)}>Back</button>
            <div id={selectedSong.videoId} />
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