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

    const lyricUrl = !selectedSong.cc ? `/sing-along/lyrics/${selectedSong.lyricsFileName}` : '';
    const { data: lrcData } = useFetch(lyricUrl);

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
                lrc={!selectedSong.cc ? lrcData : '[00:00.0] [CC Available]'}
                currentTime={milliseconds}
                lineRenderer={lineRenderer}
                style={{ height: `calc(${caption.height}px - 4em)`, overflow: 'hidden' }}
                spaceTop={0}
            />
        </section>
    );
}