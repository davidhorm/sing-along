import { Directory, Karaoke, SyncLyrics } from './components';
import { Switch, Route } from 'react-router-dom';
import { SongMetadata, SongListProvider } from './SongList.context';

const App = () => {
  return (
    <SongListProvider>
      <div className="App">
        <Switch>
          <Route path="/:videoId/edit">
            <SyncLyrics />
          </Route>
          <Route path="/:videoId">
            <Karaoke />
          </Route>
          <Route path="/">
            <Directory />
          </Route>
        </Switch>
      </div>
    </SongListProvider>
  );
}

export default App;
