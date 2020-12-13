import React from 'react';
import './Directory.css';
import { SongMetadata } from '../App';

type DirectoryProps = {
    songList: SongMetadata[];
    setSelectedSong: Function;
}
export const Directory = ({songList, setSelectedSong}: DirectoryProps) => {
    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList.map((songMetadata: SongMetadata) => {
                const title = songMetadata.lyricsFileName.replace('.lrc', '');
                const youtubeThumbnailSrc = `https://img.youtube.com/vi/${songMetadata.videoId}/mqdefault.jpg`;

                return <button key={songMetadata.videoId} onClick={() => setSelectedSong(songMetadata)}>
                    <img src={youtubeThumbnailSrc} alt={`Youtube Thumbnail of ${title}`} />
                    <div>{title}</div>
                </button>
                }
            )}
        </section>
    </>);
};