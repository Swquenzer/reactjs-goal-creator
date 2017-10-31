import React, { Component } from 'react';
import CloneDeep from 'lodash.clonedeep'
import GoalsPage from './components/goals-page.jsx'
import logo from './logo.svg';
import './App.css';


class App extends Component {
   render() {
      return (
         <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pinata</h2>
        </div>
        <header className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link" href="#home" data-toggle="tab" role="tab">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#goal-editor" data-toggle="tab" role="tab">Goal Editor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vault" data-toggle="tab" role="tab">Vault</a>
            </li>
          </ul>
        </header>
        <div className="tab-content">
          <div className="tab-pane" id="home" role="tabpanel"></div>
          <div className="tab-pane active" id="goal-editor" role="tabpanel">
            <GoalsPage />
          </div>
          <div className="tab-pane" id="vault" role="tabpanel"></div>
        </div>
      </div>
      );
   }
}

export default App;