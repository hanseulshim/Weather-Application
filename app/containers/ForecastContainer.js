var React = require('react')
var Forecast = require('../components/Forecast')
var getData = require('../helper/api').getData

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
  componentWillReceiveProps: function(nextProps) {
    if(this.props.params.city.toLowerCase() !== nextProps.params.city.toLowerCase() && this.props.params.city !== ''){
      this.makeRequest(this.props.params.city)
    }
  },
  componentDidMount: function() {
    this.makeRequest(this.props.params.city)
  },
  makeRequest: function(city) {
    getData(city)
      .then(function(forecastData){
        this.setState({
          isLoading: false,
          forecastData: forecastData
        })
      }.bind(this))
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