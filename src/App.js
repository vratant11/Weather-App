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
    <div className={(typeof weather.main !="undefined")?
    (weather.name.localeCompare("Smoke") ? 'app smoke':
    weather.name.localeCompare("Sunny")? 'app sunny':
    weather.name.localeCompare("Clouds") ? 'app cloudy':
    weather.name.localeCompare("Haze") ? 'app haze':
    weather.name.localeCompare("Rain") ? 'app rainy':
    weather.name.localeCompare("Storm") ? 'app stormy':'app')
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
            <h2>Humidity</h2>            
            {Math.round(weather.main.humidity)}%
          </div>
          <div className="temp">
            <h2>Temperature</h2>
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="wind">
          <h2>Wind-Speed</h2>
            {Math.round(weather.wind.speed)}Km/h
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
