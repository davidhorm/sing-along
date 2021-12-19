import { Directory, KaraokeByVideoId, SyncLyrics } from './components';
import { useFetch } from './hooks';
import { Switch, Route } from 'react-router-dom';

export type MusicVideo = {
  videoId: string;
  songTitle: string;
  songArtist: string;
  cc?: boolean;
}
const App = () => {
  const { data } = useFetch('/sing-along/lyrics/index.json');
  const songList: MusicVideo[] = data ? JSON.parse(data) : [];

  return (
    <div className="App">
      <Switch>
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
    </div>
  );
}

export default App;
