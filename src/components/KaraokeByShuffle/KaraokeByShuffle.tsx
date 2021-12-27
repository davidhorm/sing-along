import { useHistory, useParams } from 'react-router-dom';
import type { MusicVideo } from '../../App';
import { Karaoke } from '../Karaoke/Karaoke';

interface KaraokeByShuffleProps {
  songList: MusicVideo[];
}
export const KaraokeByShuffle = ({ songList }: KaraokeByShuffleProps) => {
  const { shuffleIndex } = useParams<any>();
  const randomIndex = parseInt(shuffleIndex, 10) % songList.length;
  const song = songList[randomIndex];

  const history = useHistory();
  const onVideoEnd = () => {
    history.replace(`/shuffle/${randomIndex + 1}`);
  };

  return (
    <Karaoke
      {...song}
      onVideoEnd={onVideoEnd}
      key={shuffleIndex} // Rerender component to fix YouTube racing issue
    />
  );
};
