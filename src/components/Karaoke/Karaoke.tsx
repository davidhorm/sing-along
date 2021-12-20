import { useYouTube, useYouTubeProps } from '../../hooks/useYouTube';
import { useDimensions } from './useDimensions';
import './Karaoke.css';
import { Lyrics } from './Lyrics';
import type { MusicVideo } from "../../App";

interface Props extends MusicVideo, Pick<useYouTubeProps, 'onVideoEnd'> { };

export const Karaoke = ({
    videoId,
    songTitle,
    songArtist,
    cc,
    onVideoEnd,
}: Props) => {
    const divId = 'video-player';

    const { dimensions: { video, caption } } = useDimensions();

    const { milliseconds } = useYouTube({
        divId,
        videoId,
        videoWidth: video.width,
        videoHeight: video.height,
        cc,
        onVideoEnd,
    });

    return (
        <section className="karaoke">
            <div id={divId} />
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