import React from 'react';
import { playlist } from './playlist';
import './Directory.css';

type DirectoryProps = {
    setVideoId: Function;
}
export const Directory = ({setVideoId}: DirectoryProps) => {
    const parseImageUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    const parseTitle = (lyricsUrl: string) => lyricsUrl.replace('/lyrics/', '').replace('.lrc', '');

    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {playlist.map(({ videoId, lyricsUrl}) => 
                <button onClick={() => setVideoId(videoId)}>
                    <img src={parseImageUrl(videoId)} />
                    <div>{parseTitle(lyricsUrl)}</div>
                </button>
            )}
        </section>
    </>);
};