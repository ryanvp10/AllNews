import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Home from './home/Home';


class Main extends Component {
    render() {
        return (
            <div>
                <AppBar color="blue" position="static">
                    <ToolBar>
                        <TypoGraphy variant ="title" color="white">
                            All News
                        </TypoGraphy>
                    </ToolBar>
                </AppBar>
            </div>

        );

    }

}

export default Main;
