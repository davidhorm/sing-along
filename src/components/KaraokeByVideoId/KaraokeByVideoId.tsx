import { useParams } from 'react-router-dom';
import { MusicVideos } from '../../MusicVideos';
import { Karaoke } from '../Karaoke/Karaoke';

export const KaraokeByVideoId = () => {
  const { videoId } = useParams<any>();
  const selectedSong = MusicVideos.filter((song) => song.videoId === videoId)[0] || {};

  return <Karaoke {...selectedSong} />;
};
