import React, { useState } from 'react';
import TopBar from './topBar'
import Map from '../map/Map'
import BtBar from './bottomBar'
import ReactTooltip from 'react-tooltip';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <RemoveScrollBar />
      <TopBar />
      <div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <BtBar />
    </div>
  );
}

export default App;
