import React from "react";
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
align-content:center;
align-items:center;
margin: 5% 0;
padding: 1%;
width: 100%;
color:white;
background: rgba(0, 128, 0, 0.7); 
border-radius: 20px;
`

const AwesomeHeader = Styled.h3`
display:flex;
color: white;
text-align: center;
margin: 0 5% 0 10%;
`
const AwesomeImage = Styled.img`
display:flex;
width:20%;
height:auto;
border-radius: 50%;
box-shadow: 5px 5px 8px green;
margin:2%;
`
const TheInsideDiv = Styled.div`
width: 40%;
text-align: left;
margin-left:10%
`


class Usercard extends React.Component {
  render() {
    return(
      <ContainerDiv>
      <AwesomeHeader>{this.props.user.login}</AwesomeHeader>  
      <AwesomeImage src={this.props.user.avatar_url}></AwesomeImage>
      <TheInsideDiv>
      <p><strong>Name:</strong> {this.props.user.name}</p>
      <p><strong>URL:</strong> {this.props.user.url}</p>
      <p><strong>Location:</strong> {this.props.user.location}</p>
      <p><strong>Followers: </strong>{this.props.user.followers}</p>
      </TheInsideDiv>
      </ContainerDiv>
    )
  }
}


export default Usercard; 

