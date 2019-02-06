import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      lattitude: null,
      month: null,
      errorMessage: '',
    }
  }

  componentDidMount() {
    this.handleGetUserLocation();  
    this.handleGetMonth();
  }

  //get the user's location
  handleGetUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lattitude: position.coords.latitude
        })
      },
      err => {
        this.setState({
          errorMessage: err.message
        })
      }
    );
  }

  handleGetMonth = () => {
    let month = new Date().getMonth();
    this.setState({
      month
    });
  }

  render() {
    if (this.state.errorMessage && !this.state.lattitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lattitude && this.state.month) {
      return <SeasonDisplay lattitude={this.state.lattitude} month={this.state.month} />
    }
    
    return <div>Loading!</div>
  }
}


ReactDOM.render(
  <App />, document.querySelector('#root')
);
