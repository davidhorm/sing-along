import React from "react";
import { Directory, Karaoke, SyncLyrics } from './components';
import { useFetch } from './hooks';

export type SongMetadata = {
  videoId: string;
  lyricsFileName: string;
  cc?: boolean;
}
const App = () => {
  const [selectedSong, setSelectedSong] = React.useState<SongMetadata>();
  const { data } = useFetch('/sing-along/lyrics/index.json');
  const songList: SongMetadata[] = data ? JSON.parse(data) : [];

  return (
    <div className="App">
      {selectedSong && selectedSong.lyricsFileName
        ? <Karaoke selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
        : selectedSong && selectedSong.videoId
          ? <SyncLyrics videoId={selectedSong.videoId} />
          : <Directory songList={songList} setSelectedSong={setSelectedSong} />
      }
    </div>
  );
}

export default App;
