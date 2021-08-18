import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, Typography, CardActions, Fab } from '@material-ui/core';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '2%',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#e8e8e8'
    },
    media: {
        // display: 'block',
        borderRadius: '10px',
        background: '#e8e8e8',
    },
    btnStyle: {
        contentAlign: 'center',
        width: '50%',
        fontFamily: 'Bentham',
        fontSize: '1.25vw',
        color: '',
        "&:hover": {
            color: '#cebeb9',
        }
    },
}));


function ProjectCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <Card className={classes.paper}>
                        <CardActionArea>
                            <Image
                                src={process.env.PUBLIC_URL + "/assets/u-pick.jpg"}
                                className={classes.media}
                            />
                            <CardContent className={classes.paper}>
                                <Typography gutterBottom variant="h4" component="h3">
                                    UPick
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    UPick is the revolutionary new App that works as the intermediary between you, your friends and what used to be big decisions like where to eat, and what to watch.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://u-pick-app.herokuapp.com/">
                                View the App
                            </Fab>
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://github.com/joeybrown-ctrl/U-Pick">
                                Get the Repo
                            </Fab>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={classes.paper}>
                        <CardActionArea>
                            <Image
                                src={process.env.PUBLIC_URL + "/assets/unleash.png"}
                                className={classes.media}
                            />
                            <CardContent className={classes.paper}>
                                <Typography gutterBottom variant="h4" component="h3">
                                    Unleash
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    With the application Unleash a user can create a profile for their pet, have it displayed publicly, then apply for open job applications.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://artemis-project-2.herokuapp.com/">
                                View the App
                            </Fab>
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://github.com/slogreco/artemis">
                                Get the Repo
                            </Fab>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={classes.paper}>
                        <CardActionArea>
                            <Image
                                src={process.env.PUBLIC_URL + "/assets/dimeTravel.png"}
                                className={classes.media}
                            />
                            <CardContent className={classes.paper}>
                                <Typography gutterBottom variant="h4" component="h3">
                                    Dime Travel
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    The Dime Travel application allows you to visualize your vacation destination while viewing the currency exchange rate.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://slogreco.github.io/dime-travel/">
                                View the App
                            </Fab>
                            <Fab variant="extended" color="primary" className={classes.btnStyle} href="https://github.com/slogreco/dime-travel">
                                Get the Repo
                            </Fab>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProjectCard;