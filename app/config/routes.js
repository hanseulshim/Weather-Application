var React = require('react')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main')
var HomeContainer = require('../containers/HomeContainer')
var WeatherContainer = require('../containers/WeatherContainer')

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer}/>
      <Route path='weather' component={WeatherContainer}/>
    </Route>
  </Router>

)

module.exports = routes