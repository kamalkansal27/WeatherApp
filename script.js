const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e0d40f9c17msh13d062a1a8ea5c1p1620b9jsnef93350e8398",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const ldh = {
  cp : 0,
  tp : 0,
  fl : 0,
  maxtemp: 0,
  mintemp: 0,
  hum : 0,
  ws: 0,
  wd: 0,
  sr: 0,
  ss: 0
};
const getWeather = (city) => {
  cityName.innerHTML = city
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if(city === "Ludhiana"){
        ldhcp.innerHTML = response.cloud_pct;
        ldhfl.innerHTML = response.feels_like;
        ldhtp.innerHTML = response.temp;
        ldhhum.innerHTML = response.humidity;
        ldhmaxtemp.innerHTML = response.max_temp;
        ldhmintemp.innerHTML = response.min_temp;
        ldhwd.innerHTML = response.wind_degrees;
        ldhws.innerHTML = response.wind_speed;
        ldhsr.innerHTML = response.sunrise;
        ldhss.innerHTML = response.sunset;
      }
      if(city === "Bathinda"){
        bthcp.innerHTML = response.cloud_pct;
        bthfl.innerHTML = response.feels_like;
        bthtp.innerHTML = response.temp;
        bthhum.innerHTML = response.humidity;
        bthmaxtemp.innerHTML = response.max_temp;
        bthmintemp.innerHTML = response.min_temp;
        bthwd.innerHTML = response.wind_degrees;
        bthws.innerHTML = response.wind_speed;
        bthsr.innerHTML = response.sunrise;
        bthss.innerHTML = response.sunset;
      }

      if(city === "Jalandhar"){
        jalcp.innerHTML = response.cloud_pct;
        jalfl.innerHTML = response.feels_like;
        jaltp.innerHTML = response.temp;
        jalhum.innerHTML = response.humidity;
        jalmaxtemp.innerHTML = response.max_temp;
        jalmintemp.innerHTML = response.min_temp;
        jalwd.innerHTML = response.wind_degrees;
        jalws.innerHTML = response.wind_speed;
        jalsr.innerHTML = response.sunrise;
        jalss.innerHTML = response.sunset;
      }

      if(city === "Ferozpur"){
        fzrcp.innerHTML = response.cloud_pct;
        fzrfl.innerHTML = response.feels_like;
        fzrtp.innerHTML = response.temp;
        fzrhum.innerHTML = response.humidity;
        fzrmaxtemp.innerHTML = response.max_temp;
        fzrmintemp.innerHTML = response.min_temp;
        fzrwd.innerHTML = response.wind_degrees;
        fzrws.innerHTML = response.wind_speed;
        fzrsr.innerHTML = response.sunrise;
        fzrss.innerHTML = response.sunset;
      }

      if(city === "Patiala"){
        patcp.innerHTML = response.cloud_pct;
        patfl.innerHTML = response.feels_like;
        pattp.innerHTML = response.temp;
        pathum.innerHTML = response.humidity;
        patmaxtemp.innerHTML = response.max_temp;
        patmintemp.innerHTML = response.min_temp;
        patwd.innerHTML = response.wind_degrees;
        patws.innerHTML = response.wind_speed;
        patsr.innerHTML = response.sunrise;
        patss.innerHTML = response.sunset;
      }

      if(city === "Mohali"){
        mohalicp.innerHTML = response.cloud_pct;
        mohalifl.innerHTML = response.feels_like;
        mohalitp.innerHTML = response.temp;
        mohalihum.innerHTML = response.humidity;
        mohalimaxtemp.innerHTML = response.max_temp;
        mohalimintemp.innerHTML = response.min_temp;
        mohaliwd.innerHTML = response.wind_degrees;
        mohaliws.innerHTML = response.wind_speed;
        mohalisr.innerHTML = response.sunrise;
        mohaliss.innerHTML = response.sunset;
      }


      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;

      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}

submit.addEventListener("click", (e) =>{
  e.preventDefault()
  getWeather(city.value);
})

getWeather("Ludhiana");
getWeather("Bathinda");
getWeather("Jalandhar");
getWeather("Ferozpur");
getWeather("Patiala");
getWeather("Mohali");
getWeather("Delhi"); 
