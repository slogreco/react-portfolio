// import { Link } from "react-router-dom"
import React from "react";
// import { Navbar, Nav } from "react-bootstrap"
import { AppBar, Toolbar, Typography, IconButton, makeStyles, Tooltip, Grid } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import theme from "../../Theme";

const useStyles = makeStyles({
    shoshanahStyle: {
        fontFamily: 'Mr De Haviland',
        textTransform: 'none',
        // marginRight: '40%'
    },
    resume: {
        alignText: 'right',
        textTransform: 'none',
        fontFamily: 'Mr De Haviland',
        // marginLeft: '30%'
    },
    root: {
        margin: theme.spacing(1),
    }
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" color="secondary" >
            <Toolbar className={classes.root}>
                <IconButton edge="start" color="primary" aria-label="menu" href='/'>
                    <Typography
                        className={classes.shoshanahStyle}
                        variant="h3"
                        color="primary">
                        Shoshanah Lo Greco
                </Typography>
                </IconButton>
                {/* <Grid 
                container
                direction="row"
                justify="right"
                alignItems="right"
                >
                    <IconButton
                        className={classes.resume}
                        edge="end"
                        color="primary"
                        href={process.env.PUBLIC_URL + "/assets/resume.pdf"}>
                        Resume
                </IconButton>
                </Grid> */}

            </Toolbar>

        </AppBar>

    )
}

export default Header;