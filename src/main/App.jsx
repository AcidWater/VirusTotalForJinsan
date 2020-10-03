import React, { useState } from 'react';
import TopBar from './topBar'
import Map from '../map/Map'
import ReactTooltip from 'react-tooltip';

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <TopBar />
      <div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default App;
