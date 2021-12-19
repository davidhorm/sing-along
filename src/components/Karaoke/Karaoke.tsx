import { useYouTube } from '../../hooks';
import { useDimensions } from './useDimensions';
import './Karaoke.css';
import { Lyrics } from './Lyrics';
import type { MusicVideo } from "../../App";

export const Karaoke = ({
    videoId,
    songTitle,
    songArtist,
    cc,
}: MusicVideo) => {
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