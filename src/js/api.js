import axios from "axios";
const axios = require('axios');

const searchWeather= async(weatherCity)=> {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${weatherCity}`},
        headers: {
          'X-RapidAPI-Key': '83909c24b7mshc0803c86fcccc9fp105030jsn6f48e3442373',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
     
          const response = await axios.get(options);
          return response;
};

 export {searchWeather}