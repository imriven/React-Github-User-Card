import React from "react";





class Followerscard extends React.Component {
  render() {
    return(
      <>
      <p>{this.props.follower.login}</p>
      <img src={this.props.follower.avatar_url}></img>
      </>
    )
  }
}


export default Followerscard; 