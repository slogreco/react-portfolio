// import { Link } from "react-router-dom"
import React from "react";
// import { Navbar, Nav } from "react-bootstrap"
import { AppBar, Toolbar, makeStyles, Button, Avatar} from '@material-ui/core';
// import ListIcon from '@material-ui/icons/List';
// import theme from "../../Theme";

const useStyles = makeStyles({
    bar: {
        background: '#959595',
        border: 'none',
        boxShadow: 'none',
        flexGrow: 1,
    },
    btnStyle: {
        textTransform: 'none',
        fontFamily: 'Bantham',
        fontSize: '25pt',
        border: 'none',
        marginRight: '2%',
        color: '#e7cac2',
        "&:hover": {
            color: '#cebeb9',
            background: '#959595'
        }
    },
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.bar} >
            <Toolbar>
                <Button className={classes.btnStyle} href='/'>
                    <Avatar alt="Logo" src={process.env.PUBLIC_URL + "/logo192.png"} href='/' className={classes.large} />
                </Button>
                <Button className={classes.btnStyle} href='/portfolio'>Portfolio</Button>
                <Button className={classes.btnStyle} href={process.env.PUBLIC_URL + "/assets/resume.pdf"}>Resume</Button>
            </Toolbar>

        </AppBar>

    )
}

export default Header;