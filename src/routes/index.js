import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import App from '../App';
import Preview from '../blocks/preview';

class Index extends Component {
    render(){
        return (
            <Router>
                <Route exact path="/"  component={App} />
                <Route exact path="/preview" component={Preview} />
            </Router>
        )
    }
}

export default  Index