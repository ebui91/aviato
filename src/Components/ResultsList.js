import React, {Component} from 'react';
import Results from './Results.js';

class ResultsList extends Component{
  constructor(props){
    super(props);

    //should be props from app.js
    // this.state={
    //
    // }
    //assign this.props.apiJSON
    // var origins=[];
    // var destinations=[];
    // var durations=[];
    // var departures=[];
    // var arrivals=[];
    // var airlines=[];
    // var prices=[];
  }


  render(){
    return(
      <div>
        <h1>Flights: </h1>
        <Results />
        <Results />
        <Results />
        <Results />
        <Results />
      </div>
    )
  }
}

export default ResultsList;
