import React from 'react';
import axios from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from '../components/ImageList';


class App extends React.Component {
  state = {
    images: [],
  }
  
  onFormSubmit = async (term) => {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: term
        },
      })
    
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;
