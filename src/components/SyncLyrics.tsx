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
        <section className="sync-lyrics" style={{display: 'flex'}}>
            <div>
                <div id={videoId}></div><br />
                <textarea onChange={e => setLyricLines(e.target.value.split('\n'))}></textarea><br />
                <button onClick={() => setMilliseconds( current => [ ...current, youTubeTime ])}>SET TIME</button><br />
                <button onClick={() => setMilliseconds( array => array.filter((_, index) => index !== milliseconds.length - 1))}>UNDO</button>
            </div>
            
            <div style={{paddingLeft: '1em', maxHeight: '100vh', overflow: 'auto'}}>
                {lyricLines.map((lyric, index) => {
                    const timestamp = milliseconds[index] ? `[${new Date(0, 0, 0, 0, 0, 0, milliseconds[index]).toISOString().substring(14, 21)}] ` : '';
                    return <div key={index}>{timestamp}{lyric}</div>
                })}
            </div>
        </section>
    );
};