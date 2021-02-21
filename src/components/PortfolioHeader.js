import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        textAlign: 'center',
        textTransform: 'none',
        fontFamily: 'Mr De Haviland',
        marginTop: '2%'
    },
    subheader: {
        textAlign: 'center',
        textTransform: 'none',
        fontFamily: 'Bantham',
    }
}));

function PortfolioHeader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        className={classes.header}
                        variant="h1"
                        color="primary"
                    >
                        Portfolio
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.subheader}
                        variant="h6"
                        color="primary"
                    >
                        A Collection of Projects
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default PortfolioHeader;
