import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component{
  render(){
    return(
      <div className='searchBox'>
        <div className='search'>
          Search Flights:
        </div>

        <div className='searchbar'>
          <input className='search-input' type='text' placeholder='Origin...' onChange={(e)=>{this.props.handleOriginChange(this.props.origin, e.target.value)}}></input>
          <input className='search-input' type='text' placeholder='Destination...' onChange={(e)=>{this.props.handleDestChange(this.props.destination, e.target.value)}}></input>
          <input className='calendar' type='date' onChange={(e)=>{this.props.handleDateChange(this.props.date, e.target.value)}}></input>
          <input className='calendar' type='date' onChange={(e)=>{this.props.handleDate2Change(this.props.date, e.target.value)}}></input>
          <input className='search-input' type='number' placeholder='# of Passengers...' onChange={(e)=>{this.props.handlePassChange(this.props.passengers, e.target.value)}}></input>
          <button type="button" className="btn btn-info btn-transparent" onClick={(e)=>{this.props.submitSearch()}}>SEARCH</button>
        </div>
      </div>
    )
  }
}

export default SearchBox;
