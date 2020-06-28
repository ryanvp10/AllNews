import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Route, HashRouter } from "react-router-dom";
import Home from './home/Home';
import NavBar from './NavBar';
import About from './about/About';
import "./Main.css"

const toolbarStyle = {
    height: '52px',
    minHeight: '52px',
    width: '100%'
  };

function Copyright() {
    return (
      <TypoGraphy variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </TypoGraphy>
    );
  }

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <AppBar color="primary" position="fixed">
                    <ToolBar style={toolbarStyle}>
                        <TypoGraphy variant ="title" color="white">
                            <p class="titletext">All News</p>
                        </TypoGraphy>
                            <NavBar/>
                    </ToolBar>
                </AppBar>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
            <footer class="footernote">
                <Container maxWidth="xs">
                    <Copyright />
                </Container>
            </footer>
            </HashRouter>
        );

    }

}

export default Main;
