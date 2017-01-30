var React = require('react')
var Weather = require('../components/Weather')

var key = 'd3f4982d45d3cfacfd7b2d580241bb20'
// var city
// api.openweathermap.org/data/2.5/weather?q={}&APPID={APIKEY}

var WeatherContainer = React.createClass({
  componentDidMount: function() {
    // console.log(this.props.location.query.location)
  },
  render: function () {
    return (
      <Weather location={this.props.location.query.location} />
    )
  }
})

module.exports = WeatherContainer