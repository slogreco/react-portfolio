import React from "react";
import { GitHub, LinkedIn, Email } from '@material-ui/icons';
import { AppBar, IconButton, Typography, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    appbar: {
        alignItems: 'center',
    },
    text: {
        textTransform: 'none'
    },
    social: {
        "&:hover": {
            color: '#cebeb9'
        }
    }
});

function Footer() {

    const classes = useStyles();

    return (
        <AppBar
            position="relative"
            color="secondary"
            className={classes.appbar}
        >
            <Toolbar>
                <IconButton edge="center" color="primary" aria-label="menu" href="https://github.com/slogreco" className={classes.social}>
                    <GitHub></GitHub>
                </IconButton>
                <IconButton edge="center" color="primary" aria-label="menu" href="https://www.linkedin.com/in/shoshanahlogreco/" className={classes.social}>
                    <LinkedIn></LinkedIn>
                </IconButton>
                <IconButton edge="center" color="primary" aria-label="menu" href="mailto:shoshanahlogreco@gmail.com" className={classes.social}>
                    <Email></Email>
                </IconButton>

            </Toolbar>
            <Typography
                className={classes.text}
                variant="h6"
                color="primary">
                &copy;2021 Shoshanah Lo Greco. All rights reserved.
                </Typography>
        </AppBar>
    )
}

export default Footer;