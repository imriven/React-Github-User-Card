import React from "react";
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
margin: 5%;
padding: 3%;
width: 25%;
color:white;
background: rgba(0, 128, 0, 0.2); 

`

const AwesomeHeader = Styled.h3`
color: white;
margin: 0 5%;
`
const AwesomeImage = Styled.img`
height:auto;
width:35%;
border-radius: 50%;
box-shadow: 5px 5px 8px green;

`


class Followerscard extends React.Component {
    render() {
      return( 
        <ContainerDiv>
        <AwesomeHeader>{this.props.follower.login}</AwesomeHeader>  
        <AwesomeImage src={this.props.follower.avatar_url}></AwesomeImage>
        </ContainerDiv>
      )
    }
  }
export default Followerscard; 