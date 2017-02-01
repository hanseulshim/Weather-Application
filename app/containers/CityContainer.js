var React = require('react')
var City = require('../components/City')


var CityContainer = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmitUser: function(e){
    e.preventDefault()
    this.context.router.push({
      pathname: '/forecast/'+ this.state.city
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