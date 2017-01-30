var React = require('react')
require('../styles/styles.css')

function City(props){
    return (
      <form className="form-inline getCity" onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              id="cityName" 
              placeholder="City Name"
              onChange={props.onUpdateUser}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-info weatherButton">Get Weather</button>
      </form>
    )
}

module.exports = City