import React from 'react'
import { AppBar, Typography, makeStyles, Toolbar, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function topBar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <div className="Main">
            <Box textAlign="center">
                <AppBar position="static" color="primary">
                    <Toolbar>    
                        <Typography variant="h5" className={classes.title}>
                            Virus . Net
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

