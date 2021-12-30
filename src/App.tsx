import { createTheme, ThemeProvider } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import {
  Directory,
  KaraokeByShuffle,
  KaraokeByVideoId,
  SyncLyrics,
} from './components';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <div className="App">
    <ThemeProvider theme={darkTheme}>
      <Switch>
        <Route path="/shuffle/:shuffleIndex">
          <KaraokeByShuffle />
        </Route>
        <Route path="/:videoId/edit">
          <SyncLyrics />
        </Route>
        <Route path="/:videoId">
          <KaraokeByVideoId />
        </Route>
        <Route path="/">
          <Directory />
        </Route>
      </Switch>
    </ThemeProvider>
  </div>
);

export default App;
