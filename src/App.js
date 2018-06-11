import React, { Component } from 'react';
import Salons from './salons.json';
import Filter from './components/Filter.js';
import List from './components/List.js';
import SalonView from './components/Salon.js';
import LeftArrowIcon from './components/icons/LeftArrowIcon.js';
import OptionsIcon from './components/icons/OptionsIcon.js';
import './App.css';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			salons: Salons.salons,
			price: 0,
			page: 'list',
			singleSalon: ''
		};
	}
	
	selectPrice = (event) => {
		this.setState({price: event.target.value})
	}
	
	salonClick = async (e) => {
		this.setState({page: 'salon'});
		this.checkSalonId( await this.setState({salonId: e.target.id}))
	}
	
	
	checkSalonId = () => {
		var singleSalon = '';
		for (var i = 0; i < this.state.salons.length; i++) {
        if (this.state.salons[i].id === Number(this.state.salonId)) {
            singleSalon = this.state.salons[i];
			this.setState({singleSalon: singleSalon})
        }
    }
	}
	
	backClick = () => {
		this.setState({page: 'list'});
	}
	
  render() {				
	  if (this.state.page === 'list'){
    return (
      <div className="App">
		<header className="listHeader">
			<button><LeftArrowIcon/></button>
			<h1>Hår</h1>
			<OptionsIcon/>
		</header>
		<main>
		<Filter salonsData={this.state.salons} selectPrice={this.selectPrice}/>
		<List salonsData={this.state.salons} price={this.state.price} salonClick={this.salonClick}/>
		</main>
      </div>
    );
	  }
	  
	  if (this.state.page === 'salon'){
		  return(
		  	<SalonView singleSalon={this.state.singleSalon} backClick={this.backClick}/> 
		  )
	  }
  }
}

export default App;
