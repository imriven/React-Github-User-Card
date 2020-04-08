import React from "react";
import axios from "axios";
import Usercard from "./component/usercard";
import Followerscard from "./component/followerCards";
import getConfig from "../src/github";
import Form from "./component/form";
import Styled from "styled-components";
import Video from "./media/video.mp4";

const BackgroundContainer = Styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 5%;
border-radius: 0 5%;
padding: 1%;
width: 60%;
color:black;
text-align: center;
`

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0 5% 0;

width: 100%;

`

const VideoBackground = Styled.div`
display: flex;
justify-content: center;
`
const AwesomeHeader = Styled.h1`
display:flex;
text-align:center;
color: white;
text-shadow: 5px 5px 8px lime;
text-align: center;
`

const AwesomeTitleHeader = Styled.h2`
display:flex;
text-align:center;
color: white;
text-shadow: 5px 5px 8px lime;
text-align: center;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userObject: null,
      followerObject: null,
      userToSearch: "imriven",
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.userToSearch !== this.state.userToSearch) {
      this.getUserFromAxios();
    }
  }

  componentDidMount() {
    this.getUserFromAxios();
  }

  getUserFromAxios = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.userToSearch}`
        
      )
      .then((response) => {
        // deal with the response data in here
        console.log(response);
        this.setState({
          userObject: response.data,
        });
        return axios.get(
          `https://api.github.com/users/${this.state.userToSearch}/followers`
        );
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
  };

  searchUserFunction = (user) => {
    this.setState({ userToSearch: user });
  };

  render() {
    return (
      <VideoBackground>
        <video style={{ zIndex: -1, position: "fixed" }} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <BackgroundContainer>
        <AwesomeHeader>GitHub User Cards</AwesomeHeader>
        <Form searchUserFunction={this.searchUserFunction} />
        {this.state.userObject && <Usercard user={this.state.userObject} />}
        <ContainerDiv>
          <AwesomeTitleHeader>Followers</AwesomeTitleHeader>
          </ContainerDiv>
        {this.state.followerObject &&
          this.state.followerObject.map((f) => <Followerscard follower={f} />)}
      </BackgroundContainer>
      </VideoBackground>
    );
  }
}

export default App;
