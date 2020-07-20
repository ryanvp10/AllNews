import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Zoom from '@material-ui/core/Zoom';
import "./Home.css"

const paperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '207px',
    backgroundColor: "#89c9b8",
    width: '98%',
    borderRadius: '3%'

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

const kompas1 = `
Jakarta - Utang luar negeri (ULN) Indonesia periode April 2020 tercatat US$ 400,2 miliar.
Angka ini tumbuh 2,9% dibandingkan dengan pertumbuhan Maret 2020 sebesar 0,6%.
Data Bank Indonesia (BI) menyebutkan ULN ini terdiri dari ULN sektor publik (pemerintah dan bank sentral) sebesar US$ 192,4 miliar [..]`;

class Home extends Component {

    render() {
        return (
            <div class="container">
             <div>
               <h2 class="headertop">Top Visited News Sites</h2>
                <Grid container spacing={3} style={{paddingBottom: '1.5%'}}>
                    <Grid item md={4}>
                        <p class="webname">Kompas</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <Tooltip arrow='true' title={kompas1} TransitionComponent={Zoom} enterDelay={200}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                    </Tooltip>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Detik</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Merdeka</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{paddingBottom: '1.5%'}}>
                    <Grid item md={4}>
                        <p class="webname">Liputan 6</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Tribun</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Jakarta Post</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{paddingBottom: '1.5%'}}>
                    <Grid item md={4}>
                        <p class="webname">Kumparan</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Sindonews</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">IDN Times</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{paddingBottom: '1.5%'}}>
                    <Grid item md={4}>
                        <p class="webname">CNN Indonesia</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Okezone</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Viva</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{paddingBottom: '1.5%'}}>
                    <Grid item md={4}>
                        <p class="webname">Suara</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Tempo</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <p class="webname">Tirto</p>
                        <Paper style={paperStyle} elevation='3' >
                            <List style={listStyle}>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://finance.detik.com/berita-ekonomi-bisnis/d-5053686/tambah-lagi-utang-luar-negeri-ri-jadi-rp-5602-t?tag_from=wp_beritautama" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listItem}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '15px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Tambah Lagi, Utang Luar Negeri RI Jadi Rp 5.602 T
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://nasional.kompas.com/read/2020/07/20/20425951/jokowi-resmi-bubarkan-18-lembaga-ini-daftarnya" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Jokowi Resmi Bubarkan 18 Lembaga, Ini Daftarnya
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://www.kompas.com/sports/read/2020/07/20/22565158/setien-ungkap-hubungannya-dengan-messi-saat-ini" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer" 
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Setien Ungkap Hubungannya dengan Messi Saat Ini
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
        {/* Ini start tempat ngisi URL dari Backend*/}
                                <ListItem component="a" 
                                    href="https://otomotif.kompas.com/read/2020/07/20/195100915/komunitas-motor-mulai-kopdar-dengan-protokol-kesehatan" 
                                    target="_blank"
                                    rel="noopener"
                                    rel="noreferrer"
                                    style={listNext}>
                                    <ListItemText primary={
                                        <TypoGraphy variant="body1" style={{color: 'white', display: 'block', 
                                                    marginTop: '7px', fontSize: '12px', fontFamily: 'Montserrat'}} noWrap="true">
                                            Komunitas Motor Mulai Kopdar dengan Protokol Kesehatan
                                        </TypoGraphy>}>
                                    </ListItemText>
                                </ListItem>
        {/* Ini end tempat ngisi URL dari Backend*/}
                                <Divider style={{marginLeft: '15px', marginRight: '15px', 
                                                 marginTop: '10px', color: 'black'}}/>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div>
                <h1>AllNews is</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus tempor ullamcorper turpis, quis ultrices nisl hendrerit vel.
                    Nam quis venenatis dolor, quis facilisis libero. Sed sodales augue at mi egestas posuere.
                    Aliquam ac neque in nunc consectetur vulputate. Etiam sagittis feugiat consequat.
                    Curabitur dictum fermentum nunc, pellentesque condimentum diam porttitor ac.
                    Sed eu sodales nulla, eget viverra nibh.
                    Praesent vel tellus sollicitudin, fringilla eros quis, efficitur nibh.</p>
            </div>
        </div>
        );

    }

}

export default Home;
