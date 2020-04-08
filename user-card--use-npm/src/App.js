import React from "react";
import axios from "axios";
import Usercard from "./component/usercard";
import Followerscard from "./component/followerCards";
import getConfig from "../src/github";
import Form from "./component/form";
import Styled from "styled-components"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userObject: null,
      followerObject: null,
      userToSearch: "imriven"
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if(prevState.userToSearch !== this.state.userToSearch) {
     this.getUserFromAxios()
    }
    
  }

  componentDidMount(){
    this.getUserFromAxios()
  }

  getUserFromAxios = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userToSearch}`, getConfig())
      .then((response) => {
        // deal with the response data in here
        console.log(response);
        this.setState({
          userObject: response.data,
        });
        return axios.get(`https://api.github.com/users/${this.state.userToSearch}/followers`, getConfig())
      })
      .then((response) => {
        this.setState({
          followerObject: response.data,
        });
      })
      .catch((err) => {
        // deal with the error in here
        console.log("There's an error", err);
      });
  }

  searchUserFunction = user => {
    this.setState({userToSearch: user})
  }

  render() {
    return (
      <div>
        <Form searchUserFunction={this.searchUserFunction}/>
        {this.state.userObject && <Usercard user={this.state.userObject} />}
        {this.state.followerObject &&
          this.state.followerObject.map((f) => <Followerscard follower={f} />)}
          
      </div>
    );
  }
}

export default App;
