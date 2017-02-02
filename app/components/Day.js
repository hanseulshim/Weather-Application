var React = require('react')
var Header = require('./Header')
var PropTypes = React.PropTypes;
var util = require('../util/util')
var getDates = util.getDates
require('../styles/styles.css')


function Day(props){
  var date = new Date(props.forecastData.dt*1000)
  var day = getDates(date,0)

    return (
      <div className="dayList text-center"  onClick={props.onClick}>
           <img className="weatherIcon center-block" src={'./app/images/weather-icons/' + props.forecastData.weather[0].icon + '.svg'} />
           <h2>{day}</h2>
      </div>
    )
}


module.exports = Day