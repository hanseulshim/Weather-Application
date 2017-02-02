var React = require('react')
var Header = require('./Header')
var PropTypes = React.PropTypes;
var Day = require('./Day')
require('../styles/styles.css')


function Detail(props){
    console.log(props)
    return (
      <div className="text-center">
      <Header />
      <Day forecastData={props.weather} />
      <h2>{props.city}</h2>
      <h2>{props.weather.weather[0].description}</h2>
      <h2>Min Temp: {Math.floor(props.weather.temp.min)}&deg;F</h2>
      <h2>Max Temp: {Math.floor(props.weather.temp.max)}&deg;F</h2>
      <h2>Humidity: {props.weather.humidity}</h2>
      </div>
    )
}


module.exports = Detail