import React from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { useDimensions, useFetch, useYouTube } from '../hooks';
import './Karaoke.css';
import { useParams, useLocation } from 'react-router-dom';

export const Karaoke = () => {
    const { dimensions: { video, caption }} = useDimensions();
    const { videoId } = useParams<any>();
    const { state: { lyricsFileName, cc } } = useLocation<any>();

    const lyricUrl = !cc ? `/sing-along/lyrics/${lyricsFileName}` : '';
    const { data: lrcData } = useFetch(lyricUrl);

    const { milliseconds } = useYouTube({
        videoId,
        videoWidth: video.width,
        videoHeight: video.height,
        cc,
    });

    interface ILrcLine {
        lrcLine: LrcLine;
        index: number;
        active: boolean
    }
    const lineRenderer = React.useCallback(({ lrcLine, active }: ILrcLine) => 
        <div className={ active ? 'active-line' : 'inactive-line' }>
            {lrcLine.content}
        </div>
    , []);

    return (
        <section className="karaoke">
            <div id={videoId} />
            <Lrc 
                className='lrc'
                lrc={!cc ? lrcData : '[00:00.0] [CC Available]'}
                currentTime={milliseconds}
                lineRenderer={lineRenderer}
                style={{ height: `calc(${caption.height}px - 4em)`, overflow: 'hidden' }}
                spaceTop={0}
            />
        </section>
    );
}