import type { MusicVideo } from '../../App';
import { Karaoke } from '../Karaoke/Karaoke';
import { useParams } from 'react-router-dom';

interface KaraokeByVideoIdProps {
  songList: MusicVideo[];
}
export const KaraokeByVideoId = ({ songList }: KaraokeByVideoIdProps) => {
  const { videoId } = useParams<any>();
  const song = songList.filter((song) => song.videoId === videoId)[0] || {};

  return <Karaoke {...song} />;
};
