import type { MusicVideo } from "../../App";
import { Karaoke } from '../Karaoke/Karaoke';
import { useParams } from 'react-router-dom';

interface KaraokeByShuffleProps {
    songList: MusicVideo[];
}
export const KaraokeByShuffle = ({ songList }: KaraokeByShuffleProps) => {
    const { shuffleIndex } = useParams<any>();
    const randomSongList = songList.sort(() => 0.5 - Math.random());
    const song = randomSongList[parseInt(shuffleIndex, 10) % songList.length];

    return <Karaoke {...song} />
}