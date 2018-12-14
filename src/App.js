import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContadorCaracteres from './ContadorCaracteres.js';
import {MyList,MyListItem} from './MyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContadorCaracteres title="Testando React"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyListItem text="Abc" color="blue" onClick={console.log.bind(console,'item clicado!')} />
          <MyList>
              <span>ABC</span>
              <span>DEF</span>
          </MyList>
          
        </header>
      </div>
    );
  }
}

export default App;
