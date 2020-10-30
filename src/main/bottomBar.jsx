/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line jsx-a11y/accessible-emoji */
import React from 'react';
import { Link, Fab, makeStyles, Snackbar, Slide, Fade, Typography } from '@material-ui/core'
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
    },

    statusTypo:{
        position: "fixed",
        margin: 0,
        bottom: 20,
        top: "auto",
        right: 20,
        color: "gray",
        userSelect: false,
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

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

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

            <Typography className={classes.statusTypo}>{year}-{month}-{date} 기준 전 세계 코로나-19 바이러스 현황</Typography>
        </div>
    )
}