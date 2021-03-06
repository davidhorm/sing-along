import './Directory.css';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { MusicVideo } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    label: { 
        flexDirection: 'column',
        minWidth: '420px'
    },
    card: {
        margin: 8,
        maxWidth: 320,
    },
    cardMedia: {
        height: 180,
    },
    cardTitle: {
        fontSize: '1rem',
        fontWeight: 500,
    }
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
                    const youtubeThumbnailAlt = `Youtube Thumbnail of ${songTitle}`;

                    const ifNeedsEditPath = songTitle && songArtist ? '' : '/edit';

                    return (
                        <Card 
                            className={classes.card}
                            key={videoId}
                            >
                            <Link to={`/${videoId}${ifNeedsEditPath}`} component={CardActionArea}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    component="img"
                                    alt={youtubeThumbnailAlt}
                                    title={youtubeThumbnailAlt}
                                    image={youtubeThumbnailSrc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                                        {songTitle}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {songArtist}
                                        {cc && <ClosedCaptionOutlinedIcon className="cc-icon" />}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    );
                }
            )}
        </section>
    </>);
};