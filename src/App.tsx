import { Directory, Karaoke, SyncLyrics } from './components';
import { useFetch } from './hooks';
import { Switch, Route } from 'react-router-dom';
import { SongMetadata } from './SongList.context';

const App = () => {
  const { data } = useFetch('/sing-along/lyrics/index.json');
  const songList: SongMetadata[] = data ? JSON.parse(data) : [];

  return (
    <div className="App">
      <Switch>
        <Route path="/:videoId/edit">
          <SyncLyrics />
        </Route>
        <Route path="/:videoId">
          <Karaoke />
        </Route>
        <Route path="/">
          <Directory songList={songList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
