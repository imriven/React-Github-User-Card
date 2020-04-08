import React from "react";


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
    this.state={
        searchUser: ""
    }
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({
            searchUser: e.target.value
        })
    }
    handleClick = e => {
        e.preventDefault()
        this.props.searchUserFunction(this.state.searchUser)
    }
  render() {
    return(
      <>
      <input 
      value={this.state.searchUser}
      onChange={this.handleChange}></input>
      <button
      onClick={this.handleClick}>Search</button>
      </>
    )
  }
}


export default SearchForm; 