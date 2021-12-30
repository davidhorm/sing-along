import { useHistory, useParams } from 'react-router-dom';
import { MusicVideos } from '../../MusicVideos';
import { Karaoke } from '../Karaoke/Karaoke';

const randomSongList = [...MusicVideos].sort(() => 0.5 - Math.random());

export const KaraokeByShuffle = () => {
  const { shuffleIndex } = useParams<any>();

  const randomIndex = parseInt(shuffleIndex, 10) % randomSongList.length;
  const song = randomSongList[randomIndex];

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
