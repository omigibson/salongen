import React, { Component } from 'react';
import './App.css';
import List from './components/List.js';
import Backbutton from './components/Backbutton.js';
import Sortbutton from './components/Sortbutton.js'

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			page: 'list'
		};
	}
	
  render() {
    return (
      <div className="App">
		<header>
			<Backbutton/>
			<h1>Hår</h1>
			<Sortbutton/>
		</header>
		<List/>
      </div>
    );
  }
}

export default App;
