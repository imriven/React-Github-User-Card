import React from "react";
import "./App.css";
import axios from "axios"




class App extends React.Component {
  constructor() {
    super ();
    this.state = {
    userObject: null
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/imriven')
    .then( response => {
        // deal with the response data in here
        console.log(response);
        this.setState({
    userObject: response.data
  });
    })
    .catch( err => {
        // deal with the error in here
        console.log("There's an error", err)
    })
 
}

  render() {
    return(
      <div></div>
    )
  }
}


export default App; 