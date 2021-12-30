import { useYouTube, useYouTubeProps } from '../../hooks/useYouTube';
import './Karaoke.css';
import { Lyrics } from './Lyrics';
import type { MusicVideo } from '../../MusicVideos';

interface Props extends MusicVideo, Pick<useYouTubeProps, 'onVideoEnd'> { }

export const Karaoke = ({
  videoId,
  songTitle,
  songArtist,
  cc,
  onVideoEnd,
}: Props) => {
  const { milliseconds } = useYouTube({
    videoId,
    cc,
    onVideoEnd,
  });

  return (
    <section className="karaoke">
      <div className="video">
        <div id={videoId} />
      </div>
      {!cc && (
        <Lyrics
          milliseconds={milliseconds}
          songTitle={songTitle}
          songArtist={songArtist}
          cc={cc}
        />
      )}
    </section>
  );
};
