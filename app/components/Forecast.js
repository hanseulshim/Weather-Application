var React = require('react')
var Header = require('./Header')
var PropTypes = React.PropTypes;
require('../styles/styles.css')

function ForecastUI(props){
  var listItems =  props.date.map(function(day, index){
        return (
          <li className="dayList" key={index}>
            <img className="img-responsive center-block" src={'./app/images/weather-icons/' + props.list[index].weather[0].icon + '.svg'} />
            <h2>{day}</h2>
          </li>
        )
  })
  return(
    <div>
      <div className="jumbotron">
        <div className="text-center">
          <h1>{props.city}</h1>
          <h2>Select a day</h2>
        </div>
        <ul className="list-inline">{listItems}</ul>
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
              city={props.city}
              date={props.date}
              list={props.list}
            />
      }
      </div>
    )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired
}

module.exports = Forecast