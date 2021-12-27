import { useParams } from 'react-router-dom';
import type { MusicVideo } from '../../App';
import { Karaoke } from '../Karaoke/Karaoke';

interface KaraokeByVideoIdProps {
  songList: MusicVideo[];
}
export const KaraokeByVideoId = ({ songList }: KaraokeByVideoIdProps) => {
  const { videoId } = useParams<any>();
  const selectedSong = songList.filter((song) => song.videoId === videoId)[0] || {};

  return <Karaoke {...selectedSong} />;
};
