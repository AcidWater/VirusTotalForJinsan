import React, { useState } from 'react';
import TopBar from './topBar'
import Map from '../map/Map' 
import { Typography } from '@material-ui/core'
import BtBar from './bottomBar'
import ReactTooltip from 'react-tooltip';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { BrowserView, MobileView } from "react-device-detect"

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <BrowserView>
        <RemoveScrollBar />
        <TopBar />
          <div>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        <BtBar />
      </BrowserView>
      <MobileView>
        <Typography>This site does not support moblie.</Typography>
      </MobileView>
    </div>
  );
}

export default App;
