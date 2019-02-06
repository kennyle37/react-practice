import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    what: ''
  }
  
  onFormSubmit = (term) => {
    this.setState({
      what: term
    }, () => console.log('state on app', this.state))

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    )
  }
}

export default App;
