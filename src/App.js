import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
    render() {
      return (
        <MuiThemeProvider>
          <div className="App">
              <Router>
                <Switch>
                    <Route exact path="/" component = {Dashboard} />
                    <Route exact path="/login" component = {Login}/>
                </Switch>
              </Router>
          </div>
        </MuiThemeProvider>
      );
    }
}
export default App;
