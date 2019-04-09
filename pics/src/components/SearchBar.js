import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    text: ''
  }

  onInput = (property) => {
    return e => this.setState({
      [property]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.text);
  }

  render () {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              value={this.state.text}
              onChange={this.onInput('text')}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
