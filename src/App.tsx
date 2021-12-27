import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
  Directory,
  KaraokeByShuffle,
  KaraokeByVideoId,
  SyncLyrics,
} from './components';
import { useFetch } from './hooks';
import { Switch, Route } from 'react-router-dom';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export type MusicVideo = {
  videoId: string;
  songTitle: string;
  songArtist: string;
  cc?: boolean;
};

const App = () => {
  const { data } = useFetch('/sing-along/lyrics/index.json');
  const songList: MusicVideo[] = data ? JSON.parse(data) : [];

  // Shuffle list here since KaraokeByShuffle rerenders on each page load
  const randomSongList = [...songList].sort(() => 0.5 - Math.random());

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Switch>
          <Route path="/shuffle/:shuffleIndex">
            <KaraokeByShuffle songList={randomSongList} />
          </Route>
          <Route path="/:videoId/edit">
            <SyncLyrics />
          </Route>
          <Route path="/:videoId">
            <KaraokeByVideoId songList={songList} />
          </Route>
          <Route path="/">
            <Directory songList={songList} />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
