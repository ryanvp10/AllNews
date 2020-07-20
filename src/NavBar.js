import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { NavLink, HashRouter } from "react-router-dom";
import {AccountCircle, Home} from '@material-ui/icons';
import './NavBar.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    iconHome: {
        marginTop: theme.spacing(1),
        position: "center",
        marginLeft: theme.spacing(1.5)
    },

    listItem: {
        marginLeft:"120px",
        minHeight: "52px",
        height: "52px"
    }

}));

function NavBar(props) {
    const classes = useStyles();

    return (
        <HashRouter>
        <List>
            <ListItem className={classes.listItem}>
                <div class="home">
                <ListItemText>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink style={{ textDecoration: 'none' }} to="/">
                            {/* <Home fontSize="small" className={classes.iconHome}></Home> */}
                            <p class="hometext">Home</p>
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>
                </div>
                <div class="about">
                <ListItemText>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink style={{ textDecoration: 'none' }} to="/about">
                            <p class="hometext">About</p>
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>
                </div>
            </ListItem >
        </List>
        </HashRouter>
    )
}

export default NavBar;