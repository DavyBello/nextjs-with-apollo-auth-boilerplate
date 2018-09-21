import { Component } from 'react'

export default class GoogleButton extends Component {
  state = {
    accessToken: ''
  }

  authenticate = (provider) => {
    window.authenticateCallback = function(token) {
      this.setState({accessToken: token})
      // this.state.accessToken = token;
    };

    window.open('/api/authentication/' + provider + '/start');
  }
  
  render (){
    return <button onClick={this.authenticate}>Google</button>
  }
}
