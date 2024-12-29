import axios from 'axios';
import { useEffect } from 'react';

function Constant (){
useEffect(()=>{
  const Options = {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/search.php',
    params: {f: 'a'},
    headers: {
      'x-rapidapi-key': 'f4899d3debmsh89e9fb5added327p1a83afjsn96a150d1a46d',
      'x-rapidapi-host': 'themealdb.p.rapidapi.com'
    }
  };
},[])
  
  try {
    const response = axios.get(Options);
    const data = response.data
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return;
}
export default Constant;