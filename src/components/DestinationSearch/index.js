// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterImages = destinationsList.filter(each_item =>
      each_item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="container2">
          <h1 className="title">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <br />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
            />
          </div>
          <ul className="items-container">
            {filterImages.map(each_item => (
              <DestinationItem
                destionationDetails={each_item}
                key={each_item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
