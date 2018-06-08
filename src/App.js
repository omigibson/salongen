import React, { Component } from 'react';
import Salons from './salons.json';
import Filter from './components/Filter.js';
import List from './components/List.js';
import Backbutton from './components/Backbutton.js';
import Sortbutton from './components/Sortbutton.js';
import './App.css';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			salons: Salons.salons,
			price: 0,
			page: 'list'
		};
	}
	
	selectPrice = (event) => {
		this.setState({price: event.target.value})
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
		<Filter salonsData={this.state.salons} selectPrice={this.selectPrice}/>
		<List salonsData={this.state.salons} price={this.state.price}/>
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
