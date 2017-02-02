var axios = require('axios')
var key = 'd3f4982d45d3cfacfd7b2d580241bb20'

  module.exports = {
    getData: function(city){
      return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&units=imperial&type=accurate&cnt=5&APPID='+key)
        .then(function(result){
          return result.data
        })
    }
  }