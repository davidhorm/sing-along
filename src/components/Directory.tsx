import React from 'react';
import './Directory.css';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { SongMetadata } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    label: { 
        flexDirection: 'column',
        minWidth: '420px'
    },
});

type DirectoryProps = {
    songList: SongMetadata[];
}
export const Directory = ({songList}: DirectoryProps) => {
    const classes = useStyles();

    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList
                .sort((a: SongMetadata, b: SongMetadata) => a.lyricsFileName.localeCompare(b.lyricsFileName))
                .map(({ videoId, lyricsFileName, cc }: SongMetadata) => {
                    const [songTitle, artist] = lyricsFileName.replace('.lrc', '').split(' - ');
                    const youtubeThumbnailSrc = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

                    const ifNeedsEditPath = lyricsFileName ? '' : '/edit';

                    return (
                        <Button 
                            variant="outlined"
                            classes={{ label: classes.label }}
                            key={videoId}
                            component={Link}
                            to={{
                                pathname: `/${videoId}${ifNeedsEditPath}`,
                                state: {
                                    lyricsFileName,
                                    cc,
                                },
                            }}
                            >
                            <img src={youtubeThumbnailSrc} alt={`Youtube Thumbnail of ${songTitle}`} />
                            <div>
                                {songTitle} <br /> {artist}
                                {cc && <ClosedCaptionOutlinedIcon className="cc-icon" />}
                            </div>
                        </Button>);
                }
            )}
        </section>
    </>);
};