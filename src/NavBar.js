import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { NavLink, HashRouter } from "react-router-dom";


function NavBar(props) {

    return (
        <HashRouter>
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink to="/">Home</NavLink>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink to="/about">About</NavLink>
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
        </HashRouter>
    )
}


export default NavBar;