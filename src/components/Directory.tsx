import React from 'react';
import './Directory.css';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { SongMetadata } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    label: { 
        flexDirection: 'column',
        minWidth: '420px'
    },
});

type DirectoryProps = {
    songList: SongMetadata[];
    setSelectedSong: Function;
}
export const Directory = ({songList, setSelectedSong}: DirectoryProps) => {
    const classes = useStyles();

    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList
                .sort((a: SongMetadata, b: SongMetadata) => a.lyricsFileName.localeCompare(b.lyricsFileName))
                .map((songMetadata: SongMetadata) => {
                    const [songTitle, artist] = songMetadata.lyricsFileName.replace('.lrc', '').split(' - ');
                    const youtubeThumbnailSrc = `https://img.youtube.com/vi/${songMetadata.videoId}/mqdefault.jpg`;

                    return (
                        <Button 
                            variant="outlined"
                            classes={{ label: classes.label }}
                            key={songMetadata.videoId}
                            onClick={() => setSelectedSong(songMetadata)}>
                            <img src={youtubeThumbnailSrc} alt={`Youtube Thumbnail of ${songTitle}`} />
                            <div>
                                {songTitle} <br /> {artist}
                                {songMetadata.cc && <ClosedCaptionOutlinedIcon className="cc-icon" />}
                            </div>
                        </Button>);
                }
            )}
        </section>
    </>);
};