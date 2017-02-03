var React = require('react')
var CityContainer = require('../containers/CityContainer')
var Header = require('./Header')
require('../styles/styles.css')

function Home(props){
    return (
      <div>
        <Header />
        <div className="row text-center vertical-center">
          <div className="col-sm-12 middleCity">
              <h1>Enter City</h1>
              <CityContainer />
          </div>
        </div>
      </div>
    )
}

module.exports = Home