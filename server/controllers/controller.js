let flights= ['this is just a test'];
//map the array of flights in your ResultsList component to make each item be returned in the Results Component

module.exports={
  create(req,res){
    //flights.push(req.body);
    var request= req.body;

    res.status(200).json(flights);
  },

  read(req,res){
    
    res.status(200).json(flights);
  },

  update(req,res){

  }

}
