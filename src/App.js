import React,{useState} from 'react';
const api = {
  key:"820879fe983a42a2df518f73d6b45038",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() 
{
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return(
    <div className={(typeof weather.main !="undefined")?(
    (weather.weather[0].main==="Smoke" ? 'app smoke':
    weather.weather[0].main==="Sunny"? 'app sunny':
    weather.weather[0].main==="Clouds" ? 'app cloudy':
    weather.weather[0].main==="Haze" ? 'app haze':
    weather.weather[0].main==="Rain" ? 'app rainy':
    weather.weather[0].main==="Storm" ? 'app stormy':
    weather.weather[0].main==="Clear" ? 'app clear':
    weather.weather[0].main==="Fog" ? 'app fog':
    weather.weather[0].main==="Mist" ? 'app mist':'app'))
    :'app'
   }>
      <main>
        <div className="header">
          <h1>Weather-App</h1>
        </div>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Type the location...."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main !="undefined") ? (
          <div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{ new Date().toLocaleString()}</div>
        </div>
        <div className="weather-box">
          <div className="humidity">
            <h2>Humidity : {Math.round(weather.main.humidity)}% </h2> 
            <h2>Real feel : {Math.round(weather.main.feels_like)}°c</h2>           
            
          </div>
          <div className="temp">
            <h2>Temperature</h2>
            {Math.round(weather.main.temp)}°c              
          </div>
          <div className="wind">
          <h2>Wind Speed : {Math.round(weather.wind.speed)}Km/h</h2>
          <h2>Pressure : {Math.round(weather.main.pressure)}mbar</h2>
            
          </div>
          <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>    
  )
  
}

export default App
