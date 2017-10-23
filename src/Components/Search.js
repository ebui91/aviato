import axios from 'axios';

export const search= function(request){
  return axios.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBqmc8aTtn4p8jIKw6XXf6vCA3HAcML7Ko', request).then(res=>{
    return res.data;
  })
}
