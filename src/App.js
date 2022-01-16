import React from 'react';
const api = {
  key:"820879fe983a42a2df518f73d6b45038",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return(
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>

    </div>
  )
}

export default App
