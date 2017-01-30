var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var CityContainer = require('../containers/CityContainer')
require('../styles/styles.css')

function Header(props){
    return (
        <div className="row header">
          <div className="col-sm-6">
            <Link to="/" className="logo">Weather App</Link>
          </div>
          <div className="col-sm-4 col-sm-offset-2 text-right">
            <CityContainer />
          </div>
        </div>
    )
}

module.exports = Header


