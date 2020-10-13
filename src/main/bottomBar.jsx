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

    linkTo: {
        
    }
}));

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function bottomBar() {
    const classes = useStyles();

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

            <ToggleButtonGroup exclusive aria-label
        </div>
    )
}