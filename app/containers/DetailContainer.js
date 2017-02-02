var React = require('react')
var Detail = require('../components/Detail')


var DetailContainer = React.createClass({
  render: function () {
    return (
      <Detail weather={this.props.location.state.weather} city={this.props.location.state.city}/>
    )
  }
})

module.exports = DetailContainer