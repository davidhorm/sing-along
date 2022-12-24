import { useCallback, useEffect, useState } from 'react';
import { Lrc, LrcLine } from '@mebtte/react-lrc';
import type { MusicVideo } from '../../MusicVideos';
import './Lyrics.css';

interface LyricsProps extends Omit<MusicVideo, 'videoId' | 'cc'> {
  milliseconds: number;
}

export const Lyrics = ({
  milliseconds,
  songTitle,
  songArtist,
}: LyricsProps) => {
  const [lrcData, setLrcData] = useState('');
  useEffect(() => {
    const lyricUrl = `/sing-along/lyrics/${songTitle} - ${songArtist}.lrc`;
    fetch(lyricUrl)
      .then((response) => response.text())
      .then(setLrcData);
  }, [songTitle, songArtist]);

  interface ILrcLine {
    lrcLine: LrcLine;
    index: number;
    active: boolean;
  }
  const lineRenderer = useCallback(
    ({ lrcLine, active }: ILrcLine) => (
      <div className={active ? 'active-line' : 'inactive-line'}>
        {lrcLine.content}
      </div>
    ),
    [],
  );

  return (
    <Lrc
      className="lrc"
      lrc={lrcData}
      currentTime={milliseconds}
      lineRenderer={lineRenderer}
      spaceTop={0}
    />
  );
};
