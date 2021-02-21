import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { ButtonGroup, Button, Paper, Grid } from '@material-ui/core';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import HomeCard from "../HomeCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    btnStyle: {
        textTransform: 'none',
        fontFamily: 'Mr De Haviland',
    }
}));

function Hero() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <HomeCard></HomeCard>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
        // <div>
        //     <Row>
        //         <Col xs={6} md={4}>
        //             <div className={classes.root}>
        //                 <Image src={process.env.PUBLIC_URL + "/assets/profile-img.jpg"} rounded className="profileImg" />
        //             </div>
        //         </Col>
                // <Col xs={12} md={8}>
                //     <p className="name">Shoshanah Lo Greco</p>
                //     <p> Shoshanah is a junior software engineer with a background in social media marketing management
                //     and patient resource management. She recently earned a certificate in full stack web development
                //     from the University of Arizona, with newly developed skills in HTML, CSS, JavaScript, and
                //     responsive web design.
                //     </p>
                //     <p>She successfully developed weekly content for business’ social media platforms including
                //     Facebook, Instagram, YouTube, and weekly email using MailChimp, all the while regularly updating
                //     the business’ website. She creates content that is not only relevant but also visually appealing
                //     and geared towards engaging users in unique and impactful ways. She has adeptly created a
                //     successful business website with a mind towards ease of use, striking content display, and ready
                //         access to relevant information .</p>
                //     <p>Shoshanah is passionate about creating life-enhancing user experiences while collaborating with
                //     others to develop meaningful content. She is positioned to provide unique perspectives on how
                //     front end users interact within emails by leveraging her background to create fast paced,
                //         quality driven, and user friendly content.</p>
                // </Col>
        //         <Col xs={6} md={4}>
        //             <div className={classes.root}>
        //                 <ButtonGroup
        //                     orientation="vertical"
        //                     color="primary"
        //                     aria-label="vertical contained primary button group"
        //                     variant="text"
        //                     fullWidth="true"
        //                     className={classes.btnStyle}
        //                 >
        //                     <Button className={classes.btnStyle}>Portfolio</Button>
        //                     <Button className={classes.btnStyle} href={process.env.PUBLIC_URL + "/assets/resume.pdf"}>Resume</Button>
        //                     <Button className={classes.btnStyle}>Contact</Button>
        //                 </ButtonGroup>
        //             </div>
        //         </Col>
        //     </Row>
        //     <Row>

        //     </Row>
        // </div>
    )
}

export default Hero;


