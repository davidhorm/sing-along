import React from 'react';
import './Directory.css';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { SongMetadata } from '../App';

type DirectoryProps = {
    songList: SongMetadata[];
    setSelectedSong: Function;
}
export const Directory = ({songList, setSelectedSong}: DirectoryProps) => {
    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList
                .sort((a: SongMetadata, b: SongMetadata) => a.lyricsFileName.localeCompare(b.lyricsFileName))
                .map((songMetadata: SongMetadata) => {
                    const [songTitle, artist] = songMetadata.lyricsFileName.replace('.lrc', '').split(' - ');
                    const youtubeThumbnailSrc = `https://img.youtube.com/vi/${songMetadata.videoId}/mqdefault.jpg`;

                    return <button key={songMetadata.videoId} onClick={() => setSelectedSong(songMetadata)}>
                        <img src={youtubeThumbnailSrc} alt={`Youtube Thumbnail of ${songTitle}`} />
                        <div>
                            {songTitle} <br /> {artist}
                            {songMetadata.cc && <ClosedCaptionOutlinedIcon className="cc-icon" />}
                        </div>
                    </button>
                }
            )}
        </section>
    </>);
};