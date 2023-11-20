import React, { Component } from 'react';
import '../styles/Search.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      category: '',
      location: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSearch = () => {
    const { time, category, location } = this.state;
    // logika.
    console.log('Keresés: Időpont:', time, 'Kategória:', category, 'Helyszín:', location);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name="time"
          className='field'
          placeholder="Időpont"
          value={this.state.time}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="category"
          className='field'
          placeholder="Kategória"
          value={this.state.category}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="location"
          className='field'
          placeholder="Helyszín"
          value={this.state.location}
          onChange={this.handleInputChange}
        />
        <button className='search-button' onClick={this.handleSearch}>Keresés</button>
      </div>
    );
  }
}

export default SearchBar;
