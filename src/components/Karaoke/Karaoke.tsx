import { useYouTube } from '../../hooks';
import { useDimensions } from './useDimensions';
import './Karaoke.css';
import type { MusicVideo } from "../../App";
import { useParams } from 'react-router-dom';
import { Lyrics } from './Lyrics';

type Props = {
    songList: MusicVideo[];
}
export const Karaoke = ({ songList }: Props) => {
    const { videoId } = useParams<any>();
    const { songTitle, songArtist, cc } = songList.filter(song => song.videoId === videoId)[0] || {};

    const { dimensions: { video, caption } } = useDimensions();
    const { milliseconds } = useYouTube({
        videoId,
        videoWidth: video.width,
        videoHeight: video.height,
        cc,
    });

    return (
        <section className="karaoke">
            <div id={videoId} />
            <Lyrics
                milliseconds={milliseconds}
                captionHeight={caption.height}
                songTitle={songTitle}
                songArtist={songArtist}
                cc={cc}
            />
        </section>
    );
}