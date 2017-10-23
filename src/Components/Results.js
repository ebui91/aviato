import React, {Component} from 'react';
import './Results.css';

class Results extends Component{
  render(){
    console.log(this.props);
    const legs = this.props.option.slice.map((leg,ind)=>(
      <div key={ind}>
        {leg.segment.map((seg, idx)=>(
          <div key={idx}>
            arrival: {seg.leg[0].arrivalTime}<br/>
            departure: {seg.leg[0].departureTime}<br/>
            duration: {seg.leg[0].duration}<br/>
            origin: {seg.leg[0].origin}<br/>
            destination: {seg.leg[0].destination}<br/>
          </div>
        ))}
      </div>
    ))
    return(
        <div className='flight-info'>
          <h1>Price: { this.props.option.pricing[0].saleTotal }</h1>
          <div className='legs'>
            {legs}
            <br></br>
          </div>

        </div>
      )
  }
}

export default Results;

// ORIGIN: trips.tripOption[].slice[].segment[].leg[].origin

// DESTINATION: trips.tripOption[].slice[].segment[].leg[].destination

// DURATION: trips.tripOption[].slice[].segment[].leg[].duration

// DEPARTURE: trips.tripOption[].slice[].segment[].leg[].departureTime

// ARRIVAL: trips.tripOption[].slice[].segment[].leg[].arrivalTime

// AIRLINE: trips.data.carrier[]

// PRICE: trips.tripOption[].saleTotal
