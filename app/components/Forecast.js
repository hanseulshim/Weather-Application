var React = require('react')
var Header = require('./Header')
var PropTypes = React.PropTypes;
var Day = require('./Day')
require('../styles/styles.css')

function ForecastUI(props){
  var listItems =  props.forecastData.list.map(function(listItem, index){
        return (
            <Day key={listItem.dt} onClick={props.onClick.bind(null, listItem)} weather={listItem} />
          )
  })
  return(
    <div>
      <div className="jumbotron">
        <div className="text-center">
          <h1>{props.forecastData.city.name}</h1>
          <h2>Select a day</h2>
        </div>
        <div className="listDay">{listItems}</div>
      </div>
    </div>
  )
}

function Forecast(props){
    return (
      <div>
      <Header />
      {
        props.isLoading
          ? <h1>Loading</h1>
          : <ForecastUI 
              forecastData={props.forecastData}
              onClick={props.onClick}
            />
      }
      </div>
    )
}

Forecast.propTypes = {
  forecastData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

module.exports = Forecast