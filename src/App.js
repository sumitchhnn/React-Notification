import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Login from './components/login/Login.js';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
