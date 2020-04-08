import React from "react";
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0 5% 0;
border-radius: 0 5%;
padding: 1%;
width: 100%;
color:black;
`

const AwesomeInput = Styled.input `
margin: 3%;
padding: .5% 3%;
width: 50%;
border-radius: 15px;
box-shadow: 5px 5px 8px lime;
outline:none;
`

const AwesomeButton = Styled.button `
display:flex;
margin-top: 3%;
box-shadow: 5px 5px 8px lime;

color: black;
border-radius: 5px;
font-size: .8em;
height: 25%;
`



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
      <ContainerDiv>
      <AwesomeInput 
      value={this.state.searchUser}
      onChange={this.handleChange}></AwesomeInput>
      <AwesomeButton
      onClick={this.handleClick}>Search</AwesomeButton>
      </ContainerDiv>
    )
  }
}


export default SearchForm; 