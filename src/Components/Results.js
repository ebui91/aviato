import React, {Component} from 'react';


class Results extends Component{

  componentWillRecieveProps(props){

    function mapper(obj){
      obj.tripOption.map((option,i)=>{
        option[i].slice.map((slice,j)=>{
          var price= option[i].saleTotal;

          slice[j].segment.map((seg,k)=>{
            seg[k].map((leg,l)=>{
              var legO= leg[l].origin;
              var legD= leg[l].destination;
              var legDur= leg[l].duration;
              var legAirline= leg[0].operatingDisclosure;
              var depart= leg[l].departureTime;
              var arrival= leg[0].arrivalTime;
            })
          })
        })
      })
    }
    mapper(this.props.results);
  }


  render(){
    const {
    data,
    tripOption,
    }=this.props.results

    return(
      <div className='flight-info'>
        <p>Airline</p>
        <p>{'leg[l].operatingDisclosure'}</p>
        <p>Price</p>
        <p>{'option[i].saleTotal'}</p>
        <p>Arrival Time</p>
        <p>{'leg[l].departureTime'}</p>
        <p>Departure Time</p>
        <p>{'leg[l].departureTime'}</p>
        <p>Duration</p>
        <p>{'leg[l].duration'}</p>
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
