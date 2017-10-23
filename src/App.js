import React, { Component } from 'react';
import SearchBox from './Components/SearchBox.js';
import Results from './Components/Results';
import axios from 'axios';
import logo from './images/aviato-logo.png';
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state={
      selectedFlight: null,
      passengers: 1,
      origin: '',
      destination: '',
      date1: '',
      date2: '',
      origin2: '',
      destination2: '',
      results: [],
    }

    this.selectFlight= this.selectFlight.bind(this);
    this.submitSearch= this.submitSearch.bind(this);
    this.handleOriginChange= this.handleOriginChange.bind(this);
    this.handleDestChange= this.handleDestChange.bind(this);
    this.handleDateChange= this.handleDateChange.bind(this);
    this.handleDate2Change= this.handleDate2Change.bind(this);
    this.handlePassChange= this.handlePassChange.bind(this);
  }

  selectFlight(result){
    this.setState({selectedFlight: result});
  }

  submitSearch(passengers, origin, destination, date1, date2, origin2, destination2){
    // console.log(this.state)

    axios.post('http://localhost:3000/api/flights', this.state)
    .then(response=>{
      console.log("response", response.data.trips.tripOption)
      this.setState({results: response.data.trips.tripOption});
    })
  }

  handleOriginChange(prop, val){
    this.setState({
      origin: val
    })
  }

  handleDestChange(prop, val){
    this.setState({
      destination: val
    })
  }

  handleDateChange(prop, val){
    this.setState({
      date1: val
    })
  }

  handleDate2Change(prop, val){
    this.setState({
      date2: val
    })
  }

  handlePassChange(prop, val){
    this.setState({
      passengers: val
    })
  }



  render(){
    return(
      <div className="App">
        <div className='Header'>
          <img id='logo' src={logo} alt={'Aviato Logo'}></img>
        </div>

        <SearchBox submitSearch={this.submitSearch} handleOriginChange={this.handleOriginChange} handleDestChange={this.handleDestChange} handleDateChange={this.handleDateChange} handleDate2Change={this.handleDate2Change} handlePassChange={this.handlePassChange}/>
        <div>
          {this.state.results.length > 0 && this.state.results.map((option, i)=>
            <Results option={option} key={i}/>)
            }
        </div>
      </div>
    );
  }
}

export default App;
