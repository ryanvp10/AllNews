import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./Home.css"

const paperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    elevation: 3,
    height: '220px',
    backgroundColor: "paleturquoise",
    width: '100%'
}

const listItem = {
    paddingTop: '0%',
    paddingBottom: '0%',
    height: 'fit-content',
    width: 'inherit',
    display: 'block'
}

const listNext = {
    paddingTop: '8px',
    paddingBottom: '0%',
    height: 'fit-content',
    width: 'inherit',
    display: 'block'
}

const listStyle = {
    height: 'inherit', 
    width: '100%', 
}

class Home extends Component {

    render() {
        return (
            <div class="container">
               <p> Home Here</p>
               <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper style={paperStyle}>
                            <List style={listStyle}>
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'pink', display: 'block'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 2"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 3"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 4"></ListItemText>
                                </ListItem>
                                <Divider/>
                                <ListItem style={listNext}>
                                    <ListItemText primary="Headline 5"></ListItemText>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );

    }

}

export default Home;
