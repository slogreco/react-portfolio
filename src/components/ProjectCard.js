import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Fab } from '@material-ui/core';
import { Image } from '@material-ui/icons';

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
        height: 250,
        display: 'block',
        borderRadius: '10px',
        background: '#e8e8e8',
        objectFit: 'cover'
    },
    btnStyle: {
        contentAlign: 'center',
        width: '50%',
        fontFamily: 'Bentham',
        fontSize: '15pt',
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
                            <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL + "/assets/u-pick.jpg"}
                                title="Upick"
                            />
                            <CardContent className={classes.paper}>
                                <Typography gutterBottom variant="h4" component="h3">
                                    UPick
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Bad at making decisions? With the U-Pick application indecisiveness won't stop you from getting food, drinks, or seeing a movie with friends.
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
                            <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL + "/assets/unleash.png"}
                                title="Unleash"
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
                            <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL + "/assets/dimeTravel.png"}
                                title="Dime Travel"
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