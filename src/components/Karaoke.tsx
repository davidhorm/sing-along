import { useCallback, useState, useEffect } from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { useDimensions, useYouTube } from '../hooks';
import './Karaoke.css';
import { SongMetadata } from "../App";
import { useParams } from 'react-router-dom';

type Props = {
    songList: SongMetadata[];
}
export const Karaoke = ({ songList }: Props) => {
    const { videoId } = useParams<any>();
    const { lyricsFileName, cc } = songList.filter(song => song.videoId === videoId)[0] || {};
    
    const [lrcData, setLrcData] = useState('');
    useEffect(() => {
        const lyricUrl = !cc ? `/sing-along/lyrics/${lyricsFileName}` : '';
        fetch(lyricUrl)
            .then(response => response.text())
            .then(setLrcData);
    },[lyricsFileName, cc]);

    const { dimensions: { video, caption }} = useDimensions();
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
    const lineRenderer = useCallback(({ lrcLine, active }: ILrcLine) => 
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