var React = require('react')
var City = require('../components/City')

var CityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return{
      city: ''
    }

  },
  handleSubmitUser: function(e){
    e.preventDefault()
    var city = this.state.city
    console.log("City name is: " + city)
    this.context.router.push({
      pathname: '/weather',
      query: {
          location: city
        }
    })
    this.setState({
      city: ''
    })
  },
  handleUpdateUser: function(e){
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <City 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        city={this.state.city}
      />
    )
  }
})

module.exports = CityContainer