import './Directory.css';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { MusicVideo } from '../App';
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
    songList: MusicVideo[];
}
export const Directory = ({songList}: DirectoryProps) => {
    const classes = useStyles();

    return (<>
        <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
        <section className="directory">
            {songList
                .sort((a: MusicVideo, b: MusicVideo) => a.songTitle.localeCompare(b.songTitle))
                .map(({ videoId, songTitle, songArtist, cc }: MusicVideo) => {
                    const youtubeThumbnailSrc = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

                    const ifNeedsEditPath = songTitle && songArtist ? '' : '/edit';

                    return (
                        <Button 
                            variant="outlined"
                            classes={{ label: classes.label }}
                            key={videoId}
                            component={Link}
                            to={`/${videoId}${ifNeedsEditPath}`}
                            >
                            <img src={youtubeThumbnailSrc} alt={`Youtube Thumbnail of ${songTitle}`} />
                            <div>
                                {songTitle} <br /> {songArtist}
                                {cc && <ClosedCaptionOutlinedIcon className="cc-icon" />}
                            </div>
                        </Button>);
                }
            )}
        </section>
    </>);
};