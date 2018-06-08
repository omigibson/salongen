import React, { Component } from 'react';
import './App.css';
import Salons from './salons.json';
import FilteredList from './components/Filter.js';
import Backbutton from './components/Backbutton.js';
import Sortbutton from './components/Sortbutton.js';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			salons: Salons.salons,
			page: 'salon'
		};
	}
	
	handleClick(){
		this.setState({page: 'salon'});
	}
	
  render() {
	  if (this.state.page === 'list'){
    return (
      <div className="App">
		<header className="listHeader">
			<Backbutton/>
			<h1>Hår</h1>
			<Sortbutton/>
		</header>
		<main>
		<FilteredList salonsData={this.state.salons}/>
		</main>
      </div>
    );
	  }
	  
	  if (this.state.page === 'salon'){
		  return(
		  <div>
			  <header className="salonHeader">
			  <Backbutton/>
			  <h1>Salong Namn</h1>
			  </header>
			  <main>
			  </main>
			</div>
		  )
	  }
  }
}

export default App;
