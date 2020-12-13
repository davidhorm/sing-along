import React from 'react';
import './Directory.css';
import { SongMetadata } from '../App';

type DirectoryProps = {
    songList: SongMetadata[];
    setSelectedSong: Function;
}
export const Directory = ({songList, setSelectedSong}: DirectoryProps) => {
    const parseImageUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    const parseTitle = (lyricsFileName: string) => lyricsFileName.replace('.lrc', '');

    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList.map((songMetadata: SongMetadata) => 
                <button key={songMetadata.videoId} onClick={() => setSelectedSong(songMetadata)}>
                    <img src={parseImageUrl(songMetadata.videoId)} />
                    <div>{parseTitle(songMetadata.lyricsFileName)}</div>
                </button>
            )}
        </section>
    </>);
};