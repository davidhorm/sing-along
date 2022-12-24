import './Directory.css';
import { Link } from 'react-router-dom';
import ClosedCaptionOutlinedIcon from '@material-ui/icons/ClosedCaptionOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MusicVideos } from '../../MusicVideos';
import { ShuffleButton } from './ShuffleButton';

const useStyles = makeStyles({
  label: {
    flexDirection: 'column',
    minWidth: '420px',
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
  },
});

export const Directory = () => {
  const classes = useStyles();

  return (
    <>
      <h1>🎄🎅🤶🎵 Christmas Sing Along 🎶☃️🎁🎄</h1>
      <nav>
        <ShuffleButton />
      </nav>
      <section className="directory">
        {MusicVideos.sort((a, b) => a.songTitle.localeCompare(b.songTitle)).map(
          ({ videoId, songTitle, songArtist, cc }) => {
            const youtubeThumbnailSrc = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            const youtubeThumbnailAlt = `Youtube Thumbnail of ${songTitle}`;

            const ifNeedsEditPath = songTitle && songArtist ? '' : '/edit';

            return (
              <Card className={classes.card} key={videoId}>
                <Link to={`/${videoId}${ifNeedsEditPath}`}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      alt={youtubeThumbnailAlt}
                      title={youtubeThumbnailAlt}
                      image={youtubeThumbnailSrc}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.cardTitle}
                      >
                        {songTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {songArtist}
                        {!!cc && (
                          <ClosedCaptionOutlinedIcon className="cc-icon" />
                        )}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          },
        )}
      </section>
    </>
  );
};
