/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Fab, makeStyles, Snackbar, Slide, Fade } from '@material-ui/core'
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
                message="💻 GitHub"
                key={state.Transition.name}
            />
        </div>
    )
}