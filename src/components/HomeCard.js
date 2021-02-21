import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        margin: '5%',
    },
    media: {
        height: 500,
    },
    paper: {
        border: 'none',
        boxShadow: 'none',
        margin: '5%'
    },
    p: {
        fontFamily: 'Bentham',
        // fontSize: '20px'
    },
    title: {
        color: '#e7cac2',
        fontFamily: 'Mr De Haviland',
        fontStyle: 'oblique',
        letterSpacing: '3px',
        fontSize: '75px',
    },
});

export default function HomeCard() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL + "/assets/profile-img.jpg"}
                                title="Shoshanah"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <p className={classes.title}>Shoshanah Lo Greco</p>
                        <p className={classes.p}> Shoshanah is a junior software engineer with a background in social media marketing management
                        and patient resource management. She recently earned a certificate in full stack web development
                        from the University of Arizona, with newly developed skills in HTML, CSS, JavaScript, and
                        responsive web design.
                    </p>
                        <p className={classes.p}>She successfully developed weekly content for business’ social media platforms including
                        Facebook, Instagram, YouTube, and weekly email using MailChimp, all the while regularly updating
                        the business’ website. She creates content that is not only relevant but also visually appealing
                        and geared towards engaging users in unique and impactful ways. She has adeptly created a
                        successful business website with a mind towards ease of use, striking content display, and ready
                        access to relevant information .</p>
                        <p className={classes.p}>Shoshanah is passionate about creating life-enhancing user experiences while collaborating with
                        others to develop meaningful content. She is positioned to provide unique perspectives on how
                        front end users interact within emails by leveraging her background to create fast paced,
                        quality driven, and user friendly content.</p>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    );
}
