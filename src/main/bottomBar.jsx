/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line jsx-a11y/accessible-emoji */
import React from 'react';
import { Link, Fab, makeStyles, Snackbar, Slide, Fade, Typography } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import { Favorite } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    newsBar: {
        position: "fixed",
        margin: 0,
        right: "auto",
        bottom: 20,
        left: 20,
        top: "auto"
    },

    inform: {
        fontFamily: "Ubuntu"
    },

    changeBar: {
        position: "fixed",
        margin: 0,
        right: 20,
        bottom: 20,
        left: "auto",
        top: "auto"
    }
}));

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function bottomBar() {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false
        })
    }

    return (
        <div className={classes.newsBar}>
            <Fab color="primary" aria-label="add" onClick={handleClick(SlideTransition)}>
                <Favorite />
            </Fab>
            <Snackbar
                className={classes.inform}
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={<Typography>Made by Guno Kim | <Link color="inherit" href="https://github.com/AcidWater/VirusTotalForJinsan">💻 GitHub</Link></Typography>}
                key={state.Transition.name}
            />

            <ToggleButtonGroup 
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="Change Virus"
                className={classes.changeBar}
            >
                <ToggleButton value="left" aria-label="COVID-19">
                    <Typography>COVID-19</Typography>
                </ToggleButton>
                <ToggleButton value="right" aria-label="Flu" disabled>
                    <Typography>Flu</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}