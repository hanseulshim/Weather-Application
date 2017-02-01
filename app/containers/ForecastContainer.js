var React = require('react')
var Forecast = require('../components/Forecast')
var axios = require('axios')
var key = 'd3f4982d45d3cfacfd7b2d580241bb20'
var Day = require('./Day')

// api.openweathermap.org/data/2.5/weather?q={}&APPID={APIKEY}

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      city: '',
      list: [],
      isLoading: true
    }
  },
  getData: function(city, that){
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&cnt=5&APPID='+key)
      .then(function(result){
        that.setState({
          city: result.data.city.name,
          list: result.data.list,
          isLoading: false
        })
      })
  },
  componentWillReceiveProps: function(nextProps) {
    if(this.state.city.toLowerCase() !== nextProps.params.city.toLowerCase() && this.state.city !== ''){
      var city = nextProps.params.city
      this.getData(city, this)
    }
  },
  componentDidMount: function() {
    var city = this.props.params.city
    this.getData(city, this)
  },
  getDates: function(){
    var date = new Date();
    return Day.GetDates(date, 4);
  },
  render: function () {
    return (
      <Forecast city={this.state.city} list={this.state.list} date={this.getDates()} isLoading={this.state.isLoading}/>
    )
  }
})

module.exports = ForecastContainer