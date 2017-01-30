var React = require('react')
var Header = require('./Header')
require('../styles/styles.css')

function Weather(props){
    return (
      <div>
        <Header />
        City name is: {props.location}
      </div>
    )
}

module.exports = Weather