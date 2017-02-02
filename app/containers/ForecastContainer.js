var React = require('react')
var Forecast = require('../components/Forecast')
var axios = require('axios')
var key = 'd3f4982d45d3cfacfd7b2d580241bb20'

// api.openweathermap.org/data/2.5/weather?q={}&APPID={APIKEY}

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      forecastData: {},
      isLoading: true
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getData: function(city, that){
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&units=imperial&type=accurate&cnt=5&APPID='+key)
      .then(function(result){
        that.setState({
          forecastData: result.data,
          isLoading: false
        })
      })
  },
  componentWillReceiveProps: function(nextProps) {
    if(this.props.params.city.toLowerCase() !== nextProps.params.city.toLowerCase() && this.props.params.city !== ''){
      this.getData(this.props.params.city, this)
    }
  },
  componentDidMount: function() {
    this.getData(this.props.params.city, this)
  },
  handleClick: function(weather){
    this.context.router.push({
      pathname:'/detail/' + this.props.params.city,
      state: {
        weather: weather,
        city: this.state.forecastData.city.name
      }
    })
  },
  render: function () {
    return (
      <Forecast 
        forecastData={this.state.forecastData} 
        isLoading={this.state.isLoading}
        onClick={this.handleClick}
      />
    )
  }
})

module.exports = ForecastContainer