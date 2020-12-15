import React from 'react';
import { useYouTube } from '../hooks';

type SyncLyricsProps = {
    videoId: string;
}
export const SyncLyrics = ({ videoId }: SyncLyricsProps) => {
    const [ lyricLines, setLyricLines ] = React.useState<string[]>([]);
    const [ milliseconds, setMilliseconds ] = React.useState<number[]>([]);
    const { milliseconds: youTubeTime } = useYouTube({videoId});

    return (
        <section className="sync-lyrics">
            <div id={videoId}></div>

            <div>
                <textarea onChange={e => setLyricLines(e.target.value.split('\n'))}></textarea>
                <button onClick={() => setMilliseconds( current => [ ...current, youTubeTime ])}>SET TIME</button>
                <button onClick={() => setMilliseconds( array => array.filter((_, index) => index !== milliseconds.length - 1))}>UNDO</button>
            </div>
            
            {lyricLines.map((lyric, index) => {
                const timestamp = milliseconds[index] ? `[${new Date(0, 0, 0, 0, 0, 0, milliseconds[index]).toISOString().substring(14, 21)}] ` : '';
                return <div style={{paddingLeft: '1em'}}>{timestamp}{lyric}</div>
            })}
        </section>
    );
};