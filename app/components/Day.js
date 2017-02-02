var React = require('react')
var Header = require('./Header')
var PropTypes = React.PropTypes;
var getDates = require('../helper/util').getDates
require('../styles/styles.css')


function Day(props){
  var date = new Date(props.weather.dt*1000)
  var day = getDates(date,0)

    return (
      <div className="dayList text-center"  onClick={props.onClick}>
           <img className="weatherIcon center-block" src={'../images/weather-icons/' + props.weather.weather[0].icon + '.svg'} />
           <h2>{day}</h2>
      </div>
    )
}

Day.propTypes = {
  weather: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

module.exports = Day