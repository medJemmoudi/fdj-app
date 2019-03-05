import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import GameGrid from './components/GameGrid';
import './css/App.scss';


class App extends Component {
  
  render() {
    return (
      <div className="container">
        <AppHeader />
        <GameGrid />
      </div>
    );
  }
  
}

export default App;