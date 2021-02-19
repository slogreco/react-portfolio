import React from "react";
import "./style.css";
// import FooterButton from "../FooterButton/FooterButton";
import { GitHub, LinkedIn, Email } from '@material-ui/icons';
import { AppBar, IconButton, Typography, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    appbar: {
        alignItems: 'center',
    },
    text: {
textTransform: 'none'
    }
});

function Footer() {

    const classes = useStyles();

    return (
        <AppBar 
        position="relative" 
        color="secondary"
        className= {classes.appbar}
        >
            <Toolbar >
                <IconButton edge="center" color="primary" aria-label="menu" href="https://github.com/slogreco">
                <GitHub></GitHub>
                </IconButton>
                <IconButton edge="center" color="primary" aria-label="menu" href="https://www.linkedin.com/in/shoshanahlogreco/">
                <LinkedIn></LinkedIn>
                </IconButton>
                <IconButton edge="center" color="primary" aria-label="menu" href="mailto:shoshanahlogreco@gmail.com">
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


        // <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        //     <BottomNavigationAction label="Recents" value="recents" icon={<Email />} />
        //     <BottomNavigationAction label="Favorites" value="favorites" icon={<LinkedIn />} />
        //     <BottomNavigationAction label="Nearby" value="nearby" icon={<GitHub />} />
        // </BottomNavigation>

        // <div>

        //     <footer className="page-footer">


        //             <div className="row justify-content-center foot-background" >
        //                 <div className="row text-center">
        //                     <ul className="page-footer">
        //                     <FooterButton href="https://www.linkedin.com/in/shoshanahlogreco/">
        //                         <i className="fab fa-linkedin-in"></i>
        //                     </FooterButton>
        //                     <FooterButton href="https://github.com/slogreco">
        //                         <i className="fab fa-github"></i>
        //                     </FooterButton>
        //                     <FooterButton href="mailto:shoshanahlogreco@gmail.com">
        //                         <i className="fas fa-envelope"></i>
        //                     </FooterButton>
        //                         <br />
        //                         <p className="foot-title">&copy;
        //                         2021 Shoshanah Lo Greco. All rights reserved.
        //                         </p>
        //                     </ul>
        //                 </div>
        //             </div>


        //     </footer>

        // </div>
    )
}

export default Footer;