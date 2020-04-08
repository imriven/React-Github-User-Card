import React from "react";


class Usercard extends React.Component {
  render() {
    return(
      <>
      <p>{this.props.user.login}</p>
      <img src={this.props.user.avatar_url}></img>
      </>
    )
  }
}


export default Usercard; 

