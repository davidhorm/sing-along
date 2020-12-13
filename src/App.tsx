import React from "react";
import { Directory, Karaoke } from './components';
import { useFetch } from './hooks';

export type SongMetadata = {
  videoId: string;
  lyricsFileName: string;
}
const App = () => {
  const [selectedSong, setSelectedSong] = React.useState<SongMetadata>();
  const { data } = useFetch('/lyrics/_index.json');
  const songList: SongMetadata[] = data ? JSON.parse(data) : [];

  return (
    <div className="App">
      {selectedSong 
        ? <Karaoke selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
        : <Directory songList={songList} setSelectedSong={setSelectedSong} />
      }
    </div>
  );
}

export default App;
