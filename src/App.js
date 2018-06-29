import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import { SideBar, TopBar } from './components';
import RootRouter from './routes';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <TopBar title="American Express Submission"/>
            <div className="Content-Container">
                <div className="Side-Panel">
                    <SideBar/>
                </div>
                <div className="Display-Panel">
                    <RootRouter/>
                </div>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
