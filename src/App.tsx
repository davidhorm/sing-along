import React from "react";
import { Directory } from './Directory';
import { Karaoke } from "./Karaoke";

const App = () => {
  const [selectedVideoId, setSelectedVideoId] = React.useState('');

  return (
    <div className="App">
      {selectedVideoId 
        ? <Karaoke videoId={selectedVideoId} setVideoId={setSelectedVideoId} />
        : <Directory setVideoId={setSelectedVideoId} />
      }
    </div>
  );
}

export default App;
