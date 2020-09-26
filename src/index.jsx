import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './main/App';
import 'leaflet/dist/leaflet.css'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Akira',
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>,document.getElementById('root'));

