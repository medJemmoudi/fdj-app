import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppHeader from './components/AppHeader';
import GameGrid from './components/GameGrid';
import store from './store';
import './css/App.scss';


class App extends Component {
  
  render() {
    return (
    	<Provider store={store}>
			<div className="container">
				<AppHeader />
				<GameGrid />
			</div>
		</Provider>
    );
  }
  
}

export default App;